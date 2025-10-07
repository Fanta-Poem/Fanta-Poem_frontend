import styled from "@emotion/styled";
import Image from "next/image";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 27, 112, 1) 0%,
    rgba(48, 23, 66, 1) 30%,
    rgba(34, 22, 43, 1) 50%,
    rgba(20, 20, 20, 1) 75%
  );
  padding: 64px 80px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 48px;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const SearchBar = styled.div`
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

export const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
`;

export const ResultsCount = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: white;
  margin: 0;
`;

export const Highlight = styled.span`
  color: var(--primary);
`;

export const SortDropdown = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const SortText = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: var(--light-primary);
`;

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const BookCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 10px;
  border-top: 0.5px solid var(--light-primary);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BookImage = styled.img`
  width: 160px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookTitle = styled.h3`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin: 0;
`;

export const BookSubtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: rgba(214, 188, 250, 0.7);
  margin: 0;
`;

export const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

export const MetaText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: rgba(214, 188, 250, 0.6);
  margin: 0;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
`;

export const TrophyIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const RatingText = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

export const ReviewCount = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: rgba(214, 188, 250, 0.6);
`;

export const BookActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;

  button {
    padding: 10px 20px;
    font-size: 14px;
    line-height: 18px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 10px 0;
  border-top: 0.5px solid var(--light-primary);
  border-bottom: 0.5px solid var(--light-primary);
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => (props.active ? "var(--primary)" : "white")};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: var(--light-primary);
`;
