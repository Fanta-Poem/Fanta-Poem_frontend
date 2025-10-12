import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
  background: #141414;
  border-radius: 20px;
  padding: 32px;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.38);
`;

export const ModalTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
  text-align: center;
`;

export const ModalDescription = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 16.8px;
  color: #a0a0a0;
  margin: 0;
  text-align: center;
`;

export const DateSection = styled.div`
  background: linear-gradient(
    145deg,
    rgba(20, 20, 20, 0.9) 0%,
    rgba(28, 28, 28, 0.8) 50%,
    rgba(60, 60, 60, 0.36) 100%
  );
  border: 1px solid rgba(122, 25, 196, 0.5);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
  filter: hue-rotate(0deg) saturate(1.2) brightness(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
`;

export const DateLabel = styled.label`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16.8px;
  color: white;
`;

export const DateInput = styled.input`
  height: 48px;
  background: rgba(38, 38, 38, 0.5);
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 12px;
  padding: 0 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  color: white;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(160, 160, 160, 0.6);
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: rgba(122, 25, 196, 0.6);
    background: rgba(38, 38, 38, 0.7);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const CancelButton = styled.button`
  flex: 1;
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

export const SubmitButton = styled.button`
  flex: 1;
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
