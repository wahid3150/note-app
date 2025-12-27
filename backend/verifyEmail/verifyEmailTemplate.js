export const verifyEmailTemplate = ({ username, verifyUrl }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:20px;">
    <tr>
      <td align="center">

        <table width="100%" max-width="600px" cellpadding="0" cellspacing="0" 
          style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color:#0d6efd;padding:20px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;">NOTE-APP</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;color:#333333;">
              <h2 style="margin-top:0;">Verify your email address</h2>

              <p style="font-size:15px;line-height:1.6;">
                Hi <strong>${username}</strong>,
              </p>

              <p style="font-size:15px;line-height:1.6;">
                Thanks for signing up for NOTE-APP.  
                Please confirm your email address by clicking the button below.
              </p>

              <!-- Button -->
              <div style="text-align:center;margin:30px 0;">
                <a href="${verifyUrl}" target="_blank"
                  style="
                    background-color:#0d6efd;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 28px;
                    border-radius:6px;
                    font-size:16px;
                    display:inline-block;
                  ">
                  Verify Email
                </a>
              </div>

              <p style="font-size:14px;line-height:1.6;color:#555;">
                If the button doesn’t work, copy and paste the link below into your browser:
              </p>

              <p style="font-size:13px;word-break:break-all;color:#0d6efd;">
                ${verifyUrl}
              </p>

              <p style="font-size:14px;color:#777;margin-top:30px;">
                If you didn’t create an account, you can safely ignore this email.
              </p>

              <p style="font-size:14px;color:#777;">
                — NOTE-APP Team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f1f3f5;padding:15px;text-align:center;font-size:12px;color:#777;">
              © ${new Date().getFullYear()} NOTE-APP. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
};
