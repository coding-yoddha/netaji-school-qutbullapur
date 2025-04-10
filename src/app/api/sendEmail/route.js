import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { childName, parentName, email, phone, grade, message } = body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
console.log("GMAIL_RECEIVER:", process.env.GMAIL_RECEIVER);

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECEIVER, // Send email to yourself
      subject: "Admission Enquiry - Netaji High School",
      text: `
        Child's Name: ${childName}
        Parent's Name: ${parentName}
        Email: ${email}
        Phone: ${phone}
        Grade Applying For: ${grade}
        Message: ${message}
      `,
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
