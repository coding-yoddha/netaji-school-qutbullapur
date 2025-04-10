import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { text, subject } = body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });
    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECEIVER, // Send email to yourself
      subject: subject,
      text: text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
