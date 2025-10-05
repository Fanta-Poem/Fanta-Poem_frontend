import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    ellipse 1400px 700px at 25% 70%,
    rgba(75, 27, 112, 0.8) 0%,
    rgba(48, 23, 66, 0.6) 30%,
    rgba(34, 22, 43, 0.4) 55%,
    rgba(20, 20, 20, 1) 85%
  );
  padding: 64px 80px;

  @media (max-width: 1024px) {
    padding: 40px;
    background: radial-gradient(
      ellipse 900px 500px at 50% 50%,
      rgba(75, 27, 112, 0.8) 0%,
      rgba(48, 23, 66, 0.6) 30%,
      rgba(34, 22, 43, 0.4) 55%,
      rgba(20, 20, 20, 1) 85%
    );
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const PageInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const LogoText = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  color: white;
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  padding: 10px 16px;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const BackIcon = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const IllustrationArea = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 483px;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const SwordImage = styled.img`
  width: 100%;
  max-width: 483px;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;
  filter: drop-shadow(0 0 40px rgba(122, 25, 196, 0.5));
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
  }
`;

export const RightPanel = styled.div`
  flex: 0.4;
  min-width: 496px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 16px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 80px 32px;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const FormTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #fafafa;
  margin: 0;
`;

export const FormSubtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #c7c7c7;
  margin: 0;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #d1d5db;
`;

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: white;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: rgba(122, 25, 196, 0.5);
    background: rgba(20, 20, 20, 0.8);
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-top: 4px;
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitcherLabel = styled.label`
  width: 40px;
  height: 20px;
  background: rgba(75, 85, 99, 0.5);
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  &[data-checked="true"] {
    background: linear-gradient(
      135deg,
      rgba(122, 25, 196, 0.8) 0%,
      rgba(93, 21, 153, 0.8) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &[data-checked="true"]::after {
    transform: translateX(20px);
  }
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

export const ForgotText = styled.a`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #9ca3af;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #7a19c4;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 56px;
  background: linear-gradient(
    135deg,
    rgba(122, 25, 196, 0.3) 0%,
    rgba(183, 148, 246, 0.3) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: none;
  border-radius: 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(122, 25, 196, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 20px;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(122, 25, 196, 0.4) 0%,
      rgba(183, 148, 246, 0.4) 100%
    );
    border-color: rgba(122, 25, 196, 0.7);
    box-shadow: 0 6px 32px rgba(122, 25, 196, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
`;

export const DividerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 8px 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

export const DividerText = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: #6b7280;
`;

export const GoogleBtn = styled.button`
  width: 100%;
  height: 56px;
  background: linear-gradient(
    135deg,
    rgba(122, 25, 196, 0.15) 0%,
    rgba(183, 148, 246, 0.15) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(122, 25, 196, 0.2) 0%,
      rgba(183, 148, 246, 0.2) 100%
    );
    border-color: rgba(122, 25, 196, 0.4);
    box-shadow: 0 6px 32px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
`;

export const GoogleIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    #4285f4 0%,
    #34a853 50%,
    #fbbc05 75%,
    #ea4335 100%
  );
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

export const GuestBtn = styled.button`
  width: 100%;
  height: 56px;
  background: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(122, 25, 196, 0.4);
  border-radius: 16px;
  font-family: "IM_Hyemin";
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #a855f7;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &:hover {
    border-color: rgba(122, 25, 196, 0.6);
    background: rgba(122, 25, 196, 0.1);
    box-shadow: 0 6px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
`;

export const SignupText = styled.p`
  font-family: "IM_Hyemin";
  font-size: 14px;
  line-height: 17px;
  color: #9ca3af;
  text-align: center;
  margin: 4px 0 0 0;
`;

export const SignupLinkText = styled.span`
  color: #7a19c4;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #9333ea;
    text-decoration: underline;
  }
`;

export const FormHead = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
