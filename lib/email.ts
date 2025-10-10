import nodemailer from "nodemailer";

// Nodemailer transporter 설정
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail 사용
  auth: {
    user: process.env.EMAIL_USER, // Gmail 주소
    pass: process.env.EMAIL_PASSWORD, // Gmail 앱 비밀번호
  },
});

export async function sendVerificationEmail(
  email: string,
  token: string,
  name: string
) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: `"판타시" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "판타시 이메일 인증",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #141414; font-family: 'IM_Hyemin', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #141414;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%;">
                  <!-- Email Body -->
                  <tr>
                    <td style="background-color: #141414; padding: 40px;">
                      <!-- Welcome Section -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
                        <tr>
                          <td align="center" style="padding-bottom: 16px;">
                            <p style="margin: 0; font-size: 24px; line-height: 28.8px; color: #ffffff; font-weight: bold;">
                              안녕하세요, ${name}님!
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <p style="margin: 0; font-size: 16px; line-height: 19.2px; color: #a0a0a0;">
                              판타시에서 당신의 여정을 기다리고 있어요.
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Verification Card -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: rgba(38, 38, 38, 0.25); border: 1px solid rgba(122, 25, 196, 0.38); border-radius: 16px; margin-bottom: 32px;">
                        <tr>
                          <td style="padding: 32px;">
                            <!-- Icon -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                              <tr>
                                <td align="center">
                                </td>
                              </tr>
                            </table>

                            <!-- Title -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                              <tr>
                                <td align="center">
                                  <p style="margin: 0; font-size: 20px; line-height: 24px; color: #ffffff; font-weight: bold;">
                                    이메일 인증이 필요합니다
                                  </p>
                                </td>
                              </tr>
                            </table>

                            <!-- Description -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td align="center">
                                  <p style="margin: 0; font-size: 15px; line-height: 22.5px; color: #cccccc;">
                                    아래 버튼을 클릭하여 계정을 활성화하고<br>
                                    당신만의 시적 감상을 시작해보세요
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Section -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center" style="padding-bottom: 20px;">
                            <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(135deg, rgba(122, 25, 196, 0.8) 0%, rgba(93, 21, 153, 0.8) 100%); color: #ffffff; text-decoration: none; padding: 16px 80px; border-radius: 16px; font-size: 18px; font-weight: bold;">
                              이메일 인증하기
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-bottom: 8px;">
                            <p style="margin: 0; font-size: 13px; line-height: 15.6px; color: #888888;">
                              버튼이 작동하지 않나요?
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <p style="margin: 0; font-size: 12px; line-height: 14.4px; color: #7a19c4; word-break: break-all;">
                              ${verificationUrl}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Email Footer -->
                  <tr>
                    <td style="background-color: #0a0a0a; padding: 32px; text-align: center;">
                      <p style="margin: 0 0 16px 0; font-size: 12px; line-height: 14.4px; color: #666666;">
                        © 2025 판타시
                      </p>
                      <p style="margin: 0; font-size: 10px; line-height: 12px; color: #555555;">
                        메일 수신을 원하지 않으시면 여기서 구독 해지할 수 있습니다
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent to:", email);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}
