import nodemailer from "nodemailer";
import "dotenv/config";
import { verifyEmailTemplate } from "./verifyEmailTemplate.js";

export const verifyEmail = async (token, email) => {
  const verifyUrl = `${process.env.CLIENT_URL}/verify/${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  //   const emailConfigurations = {
  //     from: process.env.MAIL_USER,
  //     to: email,
  //     subject: "Verification email request for NOTE -APP",
  //     text: "Hey this is just a verification email",
  //   };

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: "Verify your email address",
    html: verifyEmailTemplate({
      username: "Wahid",
      verifyUrl,
    }),
  });
};
