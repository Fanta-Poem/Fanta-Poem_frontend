import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  background: #141414;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: visible;
`;

export const HeroSection = styled.div`
  background: radial-gradient(
    ellipse at center,
    rgba(75, 27, 112, 1) 0%,
    rgba(48, 23, 66, 1) 50%,
    rgba(34, 22, 43, 1) 75%,
    rgba(20, 20, 20, 1) 100%
  );
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 900px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 80px 60px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 1440px;
  z-index: 2;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

export const LogoTitleArea = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  width: 91px;
  height: 91px;
  transform: rotate(0.06deg);
`;

export const LogoImage = styled.img`
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
`;

export const MainTitle = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 80px;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  font-size: 72px;
  text-align: center;
  color: white;
  width: 201px;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 36px;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #d6bcfa;
  font-size: 24px;
  text-align: center;
  min-width: max-content;
  margin: 0;
`;

export const CTAButtonsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  background: inherit;
`;

export const PrimaryCTA = styled.button`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  flex-shrink: 0;
  width: 200px;
  background: linear-gradient(
    135deg,
    rgba(122, 25, 196, 0.9) 0%,
    rgba(93, 21, 153, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(122, 25, 196, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 20px rgba(122, 25, 196, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(139, 42, 213, 0.95) 0%,
      rgba(110, 26, 170, 0.95) 100%
    );
    transform: translateY(-2px);
    box-shadow: 0px 8px 30px rgba(122, 25, 196, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 21.6px;
    font-style: normal;
    position: relative;
    flex-shrink: 0;
    font-size: 20px;
    white-space: pre;
    color: white;
    margin: 0;
  }
`;

export const SecondaryCTA = styled.button`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(122, 25, 196, 0.5);
  box-sizing: border-box;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  flex-shrink: 0;
  width: 180px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(122, 25, 196, 0.8);
    background: rgba(122, 25, 196, 0.15);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 19.2px;
    font-style: normal;
    position: relative;
    flex-shrink: 0;
    color: #7a19c4;
    font-size: 20px;
    white-space: pre;
    margin: 0;
  }
`;

export const FloatingElement = styled.div<{
  top: string;
  left: string;
  rotate: string;
  scale?: string;
}>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotate})
    ${(props) => (props.scale ? `scale(${props.scale})` : "")};
  z-index: 1;
  overflow: visible;
  width: 200px;
  height: 200px;

  &.floating-unicorn {
    width: 250px;
    height: 250px;
  }
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(${(props) => props.rotate})
        ${(props) => (props.scale ? `scale(${props.scale})` : "")};
    }
    50% {
      transform: translateY(-20px) rotate(${(props) => props.rotate})
        ${(props) => (props.scale ? `scale(${props.scale})` : "")};
    }
  }

  &.floating-box {
    animation-delay: -1.5s;
  }

  &.floating-unicorn {
    animation-delay: -3s;
  }

  /* 반응형 위치 조정 */
  @media (max-width: 1440px) {
    &.floating-book {
      left: 20% !important;
      top: 20% !important;
    }
    &.floating-box {
      left: 5% !important;
      top: 65% !important;
    }
    &.floating-unicorn {
      left: 75% !important;
      top: 60% !important;
    }
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;

    &.floating-book {
      left: 15% !important;
      top: 15% !important;
    }
    &.floating-box {
      left: 3% !important;
      top: 70% !important;
    }
    &.floating-unicorn {
      left: 40% !important;
      top: 50% !important;
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    &.floating-book {
      left: 10% !important;
      top: 10% !important;
    }
    &.floating-box {
      left: 2% !important;
      top: 75% !important;
    }
    &.floating-unicorn {
      left: 65% !important;
      top: 70% !important;
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;

    &.floating-book {
      left: 5% !important;
      top: 8% !important;
    }
    &.floating-box {
      left: 1% !important;
      top: 80% !important;
    }
    &.floating-unicorn {
      left: 60% !important;
      top: 75% !important;
      width: 100px;
      height: 100px;
    }
  }
`;

export const FloatingImage = styled.img`
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const FeaturesSection = styled.div`
  background: #1a1a1a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 80px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  white-space: pre;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 50.4px;
  position: relative;
  flex-shrink: 0;
  font-size: 42px;
  color: white;
  margin: 0;

  .highlight {
    color: #7a19c4;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 21.6px;
  position: relative;
  flex-shrink: 0;
  font-size: 18px;
  color: #9ca3af;
  margin: 0;
`;

export const FeatureCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 1440px;
`;

export const FeatureRow = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 21px;
  align-items: flex-end;
  overflow: hidden;
  padding: 8px 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

export const FeatureCard = styled.div`
  background: rgba(31, 31, 31, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 400px;
  align-items: flex-start;
  padding: 32px;
  position: relative;
  border-radius: 24px;
  box-shadow: 0px 12px 48px 0px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  width: 360px;
`;

export const IconContainer = styled.div`
  background: rgba(122, 25, 196, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(122, 25, 196, 0.5);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
`;

export const IconImage = styled.img`
  display: block;
  max-width: none;
  width: 64px;
  height: 64px;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 28.8px;
  position: relative;
  flex-shrink: 0;
  font-size: 24px;
  color: white;
  width: 100%;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 24px;
  position: relative;
  flex-shrink: 0;
  color: #b0b0b0;
  font-size: 16px;
  width: 100%;
  margin: 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

export const Tag = styled.div<{ variant?: "primary" | "secondary" }>`
  background: ${(props) =>
    props.variant === "secondary"
      ? "rgba(0, 0, 0, 0)"
      : "rgba(122, 25, 196, 0.2)"};
  border: ${(props) =>
    props.variant === "secondary"
      ? "1px solid rgba(122, 25, 196, 0.5)"
      : "none"};
  box-sizing: border-box;
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  position: relative;
  border-radius: 18px;
  flex-shrink: 0;

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 16.8px;
    font-style: normal;
    position: relative;
    flex-shrink: 0;
    font-size: 14px;
    white-space: pre;
    color: ${(props) => (props.variant === "secondary" ? "#7a19c4" : "white")};
    margin: 0;
  }
`;

export const VideoContainer = styled.div`
  flex: 1;
  background: rgba(42, 42, 42, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  height: 400px;
  position: relative;
  border-radius: 24px;
  flex-shrink: 0;
`;

export const PoemLines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  gap: 4px;
  align-items: flex-start;
  line-height: 16.8px;
  min-height: 1px;
  min-width: 1px;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #d6bcfa;
  font-size: 14px;
  text-align: center;

  p {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    margin: 0;
  }
`;
