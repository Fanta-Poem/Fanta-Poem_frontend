import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  padding: 41px 80px;
`;

export const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 1280px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
`;

// Left Section - Book Details
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 652px;
  flex-shrink: 0;
`;

export const BookSection = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  width: 100%;
  max-width: 652px;
`;

export const BookCover = styled.img`
  width: 227px;
  height: 342px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 342px;
  width: 380px;
  min-width: 0;
  flex-shrink: 1;
`;

export const BookMetaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 380px;
`;

export const BookTitle = styled.h1`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.6;
  color: #fafafa;
  margin: 0;
  text-align: start;
  word-break: break-word;
  white-space: normal;
  width: 100%;
  max-width: 380px;
  overflow-wrap: break-word;
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-start;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #c7c7c7;
`;

export const AuthorName = styled.span`
  white-space: nowrap;
`;

export const AuthorRole = styled.span`
  white-space: nowrap;
`;

export const Series = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #c7c7c7;
  margin: 0;
  text-align: start;
  word-break: break-word;
  white-space: normal;
  width: 100%;
  max-width: 380px;
  overflow-wrap: break-word;
`;

export const PublishInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #c7c7c7;
`;

export const Publisher = styled.span`
  white-space: nowrap;
`;

export const Separator = styled.span`
  font-family: "IM_Hyemin", "Noto Sans", sans-serif;
`;

export const PublishDate = styled.span`
  white-space: nowrap;
`;

export const ReadDateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SectionLabel = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #c7c7c7;
  margin: 0;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DateText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #fafafa;
  margin: 0;
  text-align: start;
`;

export const BottomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TrophySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 129px;
`;

export const TrophyWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const TrophyIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const StatusLikesWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 143px;
`;

export const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const StatusText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.6;
  color: white;
  margin: 0;
  white-space: nowrap;
`;

export const LikesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const LikeButton = styled.button<{ isLiked: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(122, 25, 196, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const HeartIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const LikeCount = styled.span<{ isLiked: boolean }>`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 13px;
  line-height: 15.6px;
  color: ${(props) => (props.isLiked ? "#b794f6" : "#888888")};
  font-weight: ${(props) => (props.isLiked ? "bold" : "normal")};
  white-space: nowrap;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.6;
  color: #fafafa;
  margin: 0;
`;

export const ReviewContent = styled.div`
  background: #1a1a1a;
  border: 1px solid #7a19c4;
  border-radius: 10px;
  padding: 23px 25px;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #c7c7c7;
  white-space: pre-wrap;
  overflow-y: auto;
`;

// Right Section - Poem
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const PoemSectionTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.6;
  color: #fafafa;
  margin: 0;
`;

export const PoemCard = styled.div`
  border: 1px solid #7a19c4;
  border-radius: 10px;
  min-height: 400px;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 27, 112, 1) 0%,
    rgba(48, 23, 66, 1) 50%,
    rgba(34, 22, 43, 1) 75%,
    rgba(20, 20, 20, 1) 100%
  );
  padding: 39px 80px 70px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PoemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const PoemHeader = styled.div`
  width: 100%;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const PoemTitle = styled.h3`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: normal;
  color: #fafafa;
  margin: 0;
  white-space: nowrap;
  text-align: center;
`;

export const PoemAuthor = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  color: #c7c7c7;
  margin: 0;
  white-space: nowrap;
  text-align: right;
  align-self: flex-end;
`;

export const PoemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
`;

export const PoemStanza = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PoemLine = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 24px;
  line-height: normal;
  color: white;
  margin: 0;
  text-align: center;
  white-space: nowrap;
`;
