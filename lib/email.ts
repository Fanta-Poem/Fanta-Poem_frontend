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
          <style>
            body {
              font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
              background-color: #1a1a1a;
              color: #ffffff;
              padding: 40px 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: linear-gradient(135deg, rgba(122, 25, 196, 0.1) 0%, rgba(183, 148, 246, 0.1) 100%);
              border-radius: 16px;
              padding: 40px;
              border: 1px solid rgba(122, 25, 196, 0.3);
            }
            h1 {
              color: #b794f6;
              font-size: 28px;
              margin-bottom: 20px;
            }
            p {
              font-size: 16px;
              line-height: 1.6;
              color: #c7c7c7;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              background: linear-gradient(135deg, rgba(122, 25, 196, 0.8) 0%, rgba(93, 21, 153, 0.8) 100%);
              color: white;
              text-decoration: none;
              padding: 14px 32px;
              border-radius: 12px;
              font-size: 16px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid rgba(122, 25, 196, 0.3);
              font-size: 14px;
              color: #9ca3af;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🎭 판타시에 오신 것을 환영합니다!</h1>
            <p>안녕하세요, <strong>${name}</strong>님!</p>
            <p>판타시 회원가입을 완료하려면 아래 버튼을 클릭하여 이메일 인증을 완료해주세요.</p>
            <p style="text-align: center;">
              <a href="${verificationUrl}" class="button">이메일 인증하기</a>
            </p>
            <p>버튼이 작동하지 않으면 아래 링크를 복사하여 브라우저에 붙여넣으세요:</p>
            <p style="word-break: break-all; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; font-size: 14px;">
              ${verificationUrl}
            </p>
            <div class="footer">
              <p>본 이메일은 판타시 회원가입 시 발송되었습니다.</p>
              <p>만약 본인이 요청하지 않은 이메일이라면 무시하셔도 됩니다.</p>
            </div>
          </div>
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
