const nodemailer = require("nodemailer");

async function sendMail() {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "receiver@example.com",
      subject: "Cron Job Email",
      text: "Hello! This email was sent by a cron job.",
    });

    console.log("Email sent!");
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendMail();
