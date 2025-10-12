import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #141414;
  border-radius: 20px;
  padding: 40px;
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.38);
  border: 1px solid rgba(122, 25, 196, 0.3);
`;

export const ModalTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 28.8px;
  color: white;
  margin: 0;
  text-align: center;
  word-break: keep-all;
`;

export const ModalDescription = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  color: #a0a0a0;
  margin: 0;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 56px;
  background: linear-gradient(
    135deg,
    rgba(122, 25, 196, 0.4) 0%,
    rgba(183, 148, 246, 0.4) 100%
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
  box-shadow: 0 4px 24px rgba(122, 25, 196, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(122, 25, 196, 0.5) 0%,
      rgba(183, 148, 246, 0.5) 100%
    );
    box-shadow: 0 6px 32px rgba(122, 25, 196, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 56px;
  background: rgba(38, 38, 38, 0.8);
  border: 2px solid rgba(122, 25, 196, 0.4);
  border-radius: 16px;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19.2px;
  color: #b794f6;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(122, 25, 196, 0.6);
    background: rgba(122, 25, 196, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 48px;
  background: transparent;
  border: none;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 16.8px;
  color: #888888;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #a0a0a0;
  }
`;
