import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #141414;
  border-radius: 20px;
  padding: 32px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.38);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(122, 25, 196, 0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KeyIcon = styled.img`
  width: 64px;
  height: 64px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: #a0a0a0;
  margin: 0;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const OptionCard = styled.div<{ selected: boolean }>`
  background: rgba(38, 38, 38, 0.2);
  border: ${(props) =>
    props.selected
      ? "2px solid rgba(122, 25, 196, 0.5)"
      : "1px solid #444444"};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) =>
      props.selected ? "rgba(122, 25, 196, 0.5)" : "rgba(122, 25, 196, 0.3)"};
  }
`;

export const OptionHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const OptionIconContainer = styled.div<{ selected: boolean }>`
  width: 48px;
  height: 48px;
  border: 1px solid
    ${(props) =>
      props.selected ? "rgba(122, 25, 196, 0.5)" : "rgba(68, 68, 68, 0.5)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const OptionIcon = styled.img`
  width: 36px;
  height: 36px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const OptionTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const OptionTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19.2px;
  color: white;
  margin: 0;
`;

export const OptionSubtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 13px;
  line-height: 15.6px;
  color: #a0a0a0;
  margin: 0;
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BenefitItem = styled.div<{ selected: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Dot = styled.div<{ selected: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${(props) => (props.selected ? "#7a19c4" : "#666666")};
  flex-shrink: 0;
`;

export const BenefitText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 12px;
  line-height: 14.4px;
  color: #cccccc;
  margin: 0;
  flex: 1;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 48px;
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
  font-size: 16px;
  line-height: 19.2px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(122, 25, 196, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      rgba(122, 25, 196, 0.4) 0%,
      rgba(183, 148, 246, 0.4) 100%
    );
    box-shadow: 0 6px 32px rgba(122, 25, 196, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 48px;
  background: transparent;
  border: 2px solid rgba(122, 25, 196, 0.5);
  border-radius: 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19.2px;
  color: #7a19c4;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(122, 25, 196, 0.8);
    background: rgba(122, 25, 196, 0.1);
  }
`;
