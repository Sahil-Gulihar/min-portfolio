import { REST } from "@discordjs/rest";
import {
  RESTPostAPIChannelMessageResult,
  RESTPostAPICurrentUserCreateDMChannelResult,
  Routes,
  APIEmbed,
} from "discord-api-types/v10";

export class DiscordClient {
  private rest: REST;
  private DISCORD_ID = "1099946375900319774";

  constructor() {
    this.rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_BOT_TOKEN ?? ""
    );
  }

  private async createDM() {
    try {
      return await this.rest.post(Routes.userChannels(), {
        body: { recipient_id: this.DISCORD_ID },
      }) as Promise<RESTPostAPICurrentUserCreateDMChannelResult>;
    } catch (error: any) {
      console.error('Failed to create DM channel:', {
        errorName: error.name,
        errorMessage: error.message,
        errorStack: error.stack
      });
      throw error;
    }
  }

  async sendEmbed(embed: APIEmbed): Promise<void> {
    try {
      // Add timeout and retry mechanism
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8-second timeout

      try {
        const channel = await this.createDM();
        await this.rest.post(Routes.channelMessages(channel.id), {
          body: { embeds: [embed] },
          signal: controller.signal
        });
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (error:any) {
      // Detailed error logging
      console.error('Failed to send Discord embed:', {
        errorName: error.name,
        errorMessage: error.message,
        errorStack: error.stack,
        embedTitle: embed.title,
        embedFields: embed.fields
      });

      // Differentiate between different types of errors
      if (error.name === 'AbortError') {
        throw new Error('Discord message send timed out');
      }

      throw error;
    }
  }

  // Optional: Add a retry method
  async sendEmbedWithRetry(embed: APIEmbed, maxRetries = 3): Promise<void> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await this.sendEmbed(embed);
        return;
      } catch (error) {
        console.log(`Discord message send attempt ${attempt} failed`);
        
        // Wait before retrying (exponential backoff)
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
        } else {
          throw error;
        }
      }
    }
  }
}