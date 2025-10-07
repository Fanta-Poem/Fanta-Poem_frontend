import styled from "@emotion/styled";

export const BookDetailContainer = styled.div`
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 41px 80px;
  width: 100%;
  min-height: 100vh;
`;

export const BookDetailInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  width: 100%;
  max-width: 1440px;
`;

export const BackText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: normal;
  font-style: normal;
  flex-shrink: 0;
  color: #d6bcfa;
  font-size: 18px;
  white-space: pre;
  margin: 0;
`;

export const BookDetailSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BookCard = styled.div`
  flex: 1;
  border-top: 0.5px solid #d6bcfa;
  position: relative;
  min-height: 1px;
  min-width: 1px;
`;

export const BookCardInner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 31px 26px;
  width: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

export const BookCoverImage = styled.img`
  height: 225.956px;
  width: 154px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const BookInfoRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 1px;
  min-width: 1px;
`;

export const BookInfoInner = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const BookTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  font-size: 20px;
  text-align: center;
  color: #fafafa;
  white-space: pre;
  margin: 0;
`;

export const BookSubtitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  color: #c7c7c7;
  font-size: 14px;
  text-align: center;
  white-space: pre;
  margin: 0;
`;

export const BookAuthorRow = styled.div`
  display: flex;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  gap: 10px;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  color: #c7c7c7;
  font-size: 14px;
  text-align: center;
  white-space: pre;

  p {
    flex-shrink: 0;
    margin: 0;
  }
`;

export const BookPublisherRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
  flex-shrink: 0;
  color: #c7c7c7;
  font-size: 14px;
  text-align: center;
  white-space: pre;

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: normal;
    font-style: normal;
    flex-shrink: 0;
    margin: 0;
  }
`;

export const BookPrice = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  color: #c7c7c7;
  font-size: 14px;
  text-align: center;
  white-space: pre;
  margin: 0;
`;

export const BookRatingRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const TrophyIcon = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  img {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }
`;

export const RatingText = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  font-size: 16px;
  text-align: center;
  color: #fafafa;
  white-space: pre;
  margin: 0;
`;

export const ReviewCount = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  color: #c7c7c7;
  font-size: 14px;
  text-align: center;
  white-space: pre;
  margin: 0;
`;

export const BookActions = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
`;

export const SecondaryButton = styled.button`
  background: rgba(0, 0, 0, 0);
  border: 2px solid rgba(122, 25, 196, 0.5);
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(122, 25, 196, 0.1);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 19.2px;
    font-style: normal;
    flex-shrink: 0;
    color: #7a19c4;
    font-size: 16px;
    white-space: pre;
    margin: 0;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #7a19c4 0%, #5a148f 100%);
  border: none;
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #8a29d4 0%, #6a249f 100%);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 21.6px;
    font-style: normal;
    flex-shrink: 0;
    font-size: 16px;
    color: #fafafa;
    white-space: pre;
    margin: 0;
  }
`;

export const PoetryCommentsContainer = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(122, 25, 196, 0.5);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  padding: 32px;
  border-radius: 16px;
  width: 100%;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  overflow: visible;
`;

export const CommentsHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  overflow: visible;
`;

export const CommentsTitle = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 1.6;
  font-style: normal;
  flex-shrink: 0;
  font-size: 24px;
  text-align: center;
  white-space: pre;
  color: white;
  margin: 0;
`;

export const YearFilter = styled.button`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-radius: 6px;
  width: 160px;
  background: transparent;
  border: 1px solid rgba(122, 25, 196, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(122, 25, 196, 0.1);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 20px;
    font-style: normal;
    flex-shrink: 0;
    font-size: 14px;
    color: #fafafa;
    white-space: pre;
    margin: 0;
  }
`;

export const ChevronIcon = styled.div`
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  img {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }
`;

export const Separator = styled.div`
  background: linear-gradient(to bottom, #7a19c4, rgba(0, 0, 0, 0));
  height: 1px;
  width: 100%;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  width: 100%;
`;

export const CommentCard = styled.div`
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(68, 68, 68, 0.5);
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 28px;
  border-radius: 20px;
  width: 100%;
`;

export const UserInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  width: 140px;
  flex-shrink: 0;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  font-style: normal;
  width: 100%;
`;

export const Username = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: bold;
  line-height: 19.2px;
  font-size: 16px;
  color: white;
  width: 100%;
  margin: 0;
`;

export const TimeAgo = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  line-height: 15.6px;
  color: #999999;
  font-size: 13px;
  width: 100%;
  margin: 0;
`;

export const UserRating = styled.div`
  display: flex;
  gap: 2px;
  align-items: flex-start;
  width: 100%;
`;

export const RatingIcon = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  img {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }
`;

export const PoemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  min-height: 1px;
  min-width: 1px;
`;

export const PoemLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  font-style: normal;
  font-size: 17px;
  text-align: center;
  width: 100%;

  p {
    font-family: "IM_Hyemin", sans-serif;
    line-height: 25.5px;
    flex-shrink: 0;
    color: #e0e0e0;
    width: 100%;
    margin: 0;

    &.more {
      font-weight: bold;
      line-height: 20.4px;
      color: #7a19c4;
    }
  }
`;

export const PoemQuote = styled.div`
  background: rgba(41, 41, 41, 0.5);
  display: flex;
  font-family: "IM_Hyemin", sans-serif;
  font-weight: normal;
  align-items: center;
  justify-content: center;
  font-style: normal;
  padding: 16px;
  border-radius: 16px;
  width: 100%;

  p {
    flex: 1;
    line-height: 1.6;
    min-height: 1px;
    min-width: 1px;
    color: #c7c7c7;
    font-size: 16px;
    margin: 0;
  }
`;

export const InteractionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftActions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;
`;

export const LikeButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 18px;
    height: 18px;
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: normal;
    line-height: 15.6px;
    font-style: normal;
    flex-shrink: 0;
    color: #888888;
    font-size: 13px;
    white-space: pre;
    margin: 0;
  }
`;

export const ShareButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 18px;
    height: 18px;
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: normal;
    line-height: 15.6px;
    font-style: normal;
    flex-shrink: 0;
    color: #888888;
    font-size: 13px;
    white-space: pre;
    margin: 0;
  }
`;

export const MoreButton = styled.button`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
    max-width: none;
    width: 100%;
    height: 100%;
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  gap: 8px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  background: linear-gradient(135deg, #7a19c4 0%, #5a148f 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #8a29d4 0%, #6a249f 100%);
  }

  p {
    font-family: "IM_Hyemin", sans-serif;
    font-weight: bold;
    line-height: 18px;
    font-style: normal;
    flex-shrink: 0;
    font-size: 15px;
    white-space: pre;
    color: white;
    margin: 0;
  }
`;

export const LoadingMessage = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  color: #d6bcfa;
  text-align: center;
  padding: 40px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 60px 40px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ErrorMessage = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #ff6b6b;
  text-align: center;
`;

export const ErrorDescription = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  color: #c7c7c7;
  text-align: center;
  line-height: 1.6;
`;

export const ErrorButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  button {
    padding: 12px 24px;
    font-size: 16px;
  }
`;
