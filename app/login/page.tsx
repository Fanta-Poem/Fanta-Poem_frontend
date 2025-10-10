"use client";

import { useState } from "react";
import * as S from "./style";
import Link from "next/link";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import GoogleIcon from "../components/GoogleIcon";
import BackButton from "../components/BackButton";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";

const scrollImg = "/3d/scroll.svg";
const swardImg = "/3d/sword.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password, rememberMe });
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/", // 로그인 성공 후 리다이렉트할 페이지
      });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGuestLogin = () => {
    console.log("Guest login");
  };

  return (
    <S.PageContainer>
      <S.PageInner>
        <S.LeftPanel>
          <S.TopBar>
            <S.LogoSection>
              <S.LogoImage src={scrollImg} alt="판타시 로고" />
              <S.LogoText>판타시</S.LogoText>
            </S.LogoSection>
            <BackButton />
          </S.TopBar>
          <S.IllustrationArea>
            <S.SwordImage src={swardImg} alt="3D Illustration" />
          </S.IllustrationArea>
        </S.LeftPanel>

        <S.RightPanel>
          <S.FormWrapper onSubmit={handleLogin}>
            <S.FormHead>
              <S.FormTitle>다시 오셨군요, 탐험가님!</S.FormTitle>
              <S.FormSubtitle>
                읽다 멈춘 이야기가 당신을 기다리고 있어요.
              </S.FormSubtitle>
            </S.FormHead>

            <S.InputSection>
              <S.InputLabel>이메일</S.InputLabel>
              <S.InputField
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </S.InputSection>

            <S.InputSection>
              <S.InputLabel>비밀번호</S.InputLabel>
              <S.PasswordInputWrapper>
                <S.InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <S.EyeButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={16} />
                  ) : (
                    <EyeOff size={16} color="gray" />
                  )}
                </S.EyeButton>
              </S.PasswordInputWrapper>
            </S.InputSection>

            <S.OptionsRow>
              <S.RememberMe>
                <S.SwitcherLabel data-checked={rememberMe}>
                  <S.HiddenCheckbox
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </S.SwitcherLabel>
              </S.RememberMe>
              <S.ForgotText>비밀번호를 잊어버리셨나요?</S.ForgotText>
            </S.OptionsRow>

            <Button type="submit">로그인</Button>

            <S.DividerSection>
              <S.DividerLine />
              <S.DividerText>또는</S.DividerText>
              <S.DividerLine />
            </S.DividerSection>

            <Button onClick={handleGoogleLogin} icon={<GoogleIcon />}>
              Google 계정으로 계속하기
            </Button>

            <OutlineButton onClick={handleGuestLogin}>
              게스트로 둘러보기
            </OutlineButton>

            <S.SignupText>
              계정이 없으신가요?{" "}
              <Link href="/signup">
                <S.SignupLinkText>회원가입</S.SignupLinkText>
              </Link>
            </S.SignupText>
          </S.FormWrapper>
        </S.RightPanel>
      </S.PageInner>
    </S.PageContainer>
  );
}
