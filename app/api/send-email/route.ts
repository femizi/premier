import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { to } = data

    const { data: emailData, error } = await resend.emails.send({
      from: "Valentine <onboarding@resend.dev>",
      to: "obito.femi@gmail.com",
      subject: "💝 She said YES! - Valentine's Celebration",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #e11d48; text-align: center;">🎉 She Said YES! 🎉</h1>
          <p style="color: #374151; font-size: 16px; line-height: 1.5;">
            Elizabeth has accepted your Valentine's request! Time to celebrate this special moment.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.5;">
            Your love story continues to unfold, and this is just another beautiful chapter.
          </p>
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #e11d48; font-size: 20px;">❤️ Happy Valentine's Day! ❤️</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ message: "Email sent successfully" })
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}

