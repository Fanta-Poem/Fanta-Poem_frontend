import styled from "@emotion/styled";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const StyledOutlineButton = styled.button`
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
  color: #7a19c4;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function OutlineButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}: OutlineButtonProps) {
  return (
    <StyledOutlineButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledOutlineButton>
  );
}
