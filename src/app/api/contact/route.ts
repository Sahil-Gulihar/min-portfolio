import { DiscordClient } from "@/lib/discord-client"

export const POST = async (request: Request) => {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const discord = new DiscordClient()
    await discord.sendEmbed({
      title: "Portfolio Contact",
      color: 0x00ff00,
      fields: [
        { name: "Name", value: name },
        { name: "Email", value: email },
        { name: "Message", value: message }
      ]
    })

    return new Response(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}