import styled from "@emotion/styled";

export const ExploreContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  padding: 41px 80px;
`;

export const ExploreInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 1280px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #fff;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 1.2;
  color: #fafafa;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #a0a0a0;
  margin: 0;
`;

export const PoemsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #a0a0a0;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
`;

export const PoemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`;

export const PoemCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(20, 20, 20, 0.9) 0%,
    rgba(28, 28, 28, 0.8) 50%,
    rgba(40, 40, 40, 0.4) 100%
  );
  border: 1px solid rgba(122, 25, 196, 0.3);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(122, 25, 196, 0.6);
    box-shadow: 0 8px 24px rgba(122, 25, 196, 0.2);
  }
`;

export const BookCover = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  background: #262626;
`;

export const PoemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PoemTitle = styled.h3`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.4;
  color: #fafafa;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BookTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #a0a0a0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PoemMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const AuthorName = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: #b794f6;
`;

export const DateText = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  color: #888888;
`;

export const LikeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(122, 25, 196, 0.2);
`;

export const LikeButton = styled.button<{ isLiked: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.2s ease;
  color: ${(props) => (props.isLiked ? "#b794f6" : "#888888")};
  background: ${(props) =>
    props.isLiked ? "rgba(122, 25, 196, 0.15)" : "rgba(255, 255, 255, 0.05)"};

  &:hover:not(:disabled) {
    background: rgba(122, 25, 196, 0.2);
    color: #b794f6;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    transition: all 0.2s ease;
  }
`;

export const LikeCount = styled.span`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  font-weight: ${(props: { isLiked: boolean }) =>
    props.isLiked ? "bold" : "normal"};
`;
