import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const StyledButton = styled.button`
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
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

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {icon}
      {children}
    </StyledButton>
  );
}
