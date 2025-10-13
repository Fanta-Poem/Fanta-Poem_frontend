"use client";

import { useState, useEffect } from "react";
import * as S from "./style";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import GoogleIcon from "../components/GoogleIcon";
import BackButton from "../components/BackButton";
import { Eye, EyeOff } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const scrollImg = "/3d/scroll.svg";
const swardImg = "/3d/sword.svg";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // URL 파라미터 확인 (이메일 인증 완료 또는 에러)
  useEffect(() => {
    const verified = searchParams.get("verified");
    const errorParam = searchParams.get("error");

    if (verified === "true") {
      setSuccessMessage("이메일 인증이 완료되었습니다! 이제 로그인해주세요.");
    } else if (errorParam === "invalid-token") {
      setError("유효하지 않은 인증 링크입니다.");
    } else if (errorParam === "token-expired") {
      setError("인증 링크가 만료되었습니다. 다시 회원가입해주세요.");
    } else if (errorParam === "verification-failed") {
      setError("이메일 인증에 실패했습니다. 다시 시도해주세요.");
    } else if (errorParam === "already-verified") {
      setError("이미 인증된 계정입니다. 로그인해주세요.");
    }
  }, [searchParams]);

  // 이미 로그인되어 있으면 /menu로 리다이렉트
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/menu");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      if (isSignup) {
        // 회원가입 로직
        if (password !== confirmPassword) {
          setError("비밀번호가 일치하지 않습니다.");
          setIsLoading(false);
          return;
        }

        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, name }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "회원가입에 실패했습니다.");
          setIsLoading(false);
          return;
        }

        // 회원가입 성공
        setSuccessMessage(data.message);
        setIsSignup(false);
        setPassword("");
        setConfirmPassword("");
        setName("");
      } else {
        // 로그인 로직
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("이메일 또는 비밀번호가 올바르지 않습니다.");
          setIsLoading(false);
          return;
        }

        // 로그인 성공
        router.push("/menu");
      }
    } catch (error) {
      console.error("Auth error:", error);
      setError("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/menu", // 로그인 성공 후 메뉴 페이지로 리다이렉트
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
          <S.FormWrapper onSubmit={handleSubmit}>
            <S.FormHead>
              <S.FormTitle>
                {isSignup
                  ? "새로운 여정을 시작하세요!"
                  : "다시 오셨군요, 탐험가님!"}
              </S.FormTitle>
              <S.FormSubtitle>
                {isSignup
                  ? "판타시에 가입하고 당신만의 독서 연대기를 만들어보세요."
                  : "읽다 멈춘 이야기가 당신을 기다리고 있어요."}
              </S.FormSubtitle>
            </S.FormHead>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            {successMessage && (
              <S.SuccessMessage>{successMessage}</S.SuccessMessage>
            )}

            {isSignup && (
              <S.InputSection>
                <S.InputLabel>닉네임</S.InputLabel>
                <S.InputField
                  type="text"
                  placeholder="닉네임"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </S.InputSection>
            )}

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

            {isSignup && (
              <S.InputSection>
                <S.InputLabel>비밀번호 확인</S.InputLabel>
                <S.PasswordInputWrapper>
                  <S.InputField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <S.EyeButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} color="gray" />
                    )}
                  </S.EyeButton>
                </S.PasswordInputWrapper>
              </S.InputSection>
            )}

            {!isSignup && (
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
            )}

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "처리 중..." : isSignup ? "회원가입" : "로그인"}
            </Button>

            {!isSignup && (
              <>
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
              </>
            )}
            <S.SignupText>
              {isSignup ? "이미 계정이 있으신가요? " : "계정이 없으신가요? "}
              <S.SignupLinkText onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "로그인" : "회원가입"}
              </S.SignupLinkText>
            </S.SignupText>
          </S.FormWrapper>
        </S.RightPanel>
      </S.PageInner>
    </S.PageContainer>
  );
}
