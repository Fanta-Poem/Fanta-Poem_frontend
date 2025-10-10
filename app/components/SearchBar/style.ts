import styled from "@emotion/styled";

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: rgba(31, 31, 31, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
`;

export const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: white;
  padding: 19px 18px;

  &::placeholder {
    color: rgba(214, 188, 250, 0.5);
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  object-fit: cover;

  &:hover {
    opacity: 0.8;
  }
`;
