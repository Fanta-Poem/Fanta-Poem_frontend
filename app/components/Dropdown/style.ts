import styled from "@emotion/styled";

export const DropdownWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${(props) => props.width};
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  background: transparent;
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(122, 25, 196, 0.5);
    background: rgba(122, 25, 196, 0.1);
  }
`;

export const DropdownText = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: var(--light-primary);
  white-space: nowrap;
`;

export const ChevronIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 100%;
  background: rgba(31, 31, 31, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export const DropdownItem = styled.button<{ active?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background: ${(props) =>
    props.active ? "rgba(122, 25, 196, 0.2)" : "transparent"};
  border: none;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => (props.active ? "var(--primary)" : "white")};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(122, 25, 196, 0.15);
  }

  &:first-of-type {
    border-radius: 12px 12px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 12px 12px;
  }
`;
