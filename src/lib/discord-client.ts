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
    return this.rest.post(Routes.userChannels(),{
        body: { recipient_id: this.DISCORD_ID },
    }) as Promise<RESTPostAPICurrentUserCreateDMChannelResult>;
  }
  async sendEmbed(embed: APIEmbed): Promise<void> {
    const channel = await this.createDM();
    this.rest.post(Routes.channelMessages(channel.id), {
      body: { embeds: [embed] },
    });
  }
}
