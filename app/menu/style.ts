import styled from "@emotion/styled";

export const MenuContainer = styled.div`
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
  padding: 78px 165px;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1110px;
  gap: 40px;
`;

export const DotsIndicator = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div<{ active?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "var(--light-primary)" : "rgba(214, 188, 250, 0.3)"};
  transition: all 0.3s ease;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 36px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const ArrowButton = styled.button<{ direction: "left" | "right" }>`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 72px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 722px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MenuTitle = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 80px;
  line-height: 80px;
  color: white;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 256px;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
      transform: translateY(-20px);
    }
  }
`;

export const DescriptionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 722px;
`;

export const Description = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  color: var(--light-primary);
  margin: 0;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;
