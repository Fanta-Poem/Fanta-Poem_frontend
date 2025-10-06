"use client";

import styled from "@emotion/styled";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--light-primary);
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  padding: 12px 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <StyledBackButton onClick={handleBack}>
      <ChevronLeft size={20} color="var(--light-primary)" />
      뒤로가기
    </StyledBackButton>
  );
}
