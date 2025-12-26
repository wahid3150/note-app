import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyEmail = async (token, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const emailConfigurations = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Verification email request for NOTE -APP",
    text: "Hey this is just a verification email",
  };
  transporter.sendMail(emailConfigurations, function (error, info) {
    if (error) {
      throw new Error(error);
    }
    console.log("email send successfully");
    console.log(info);
  });
};
