import styled from "@emotion/styled";
import Image from "next/image";

// Search variant styles
export const SearchBookCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 10px;
  border-top: 0.5px solid var(--light-primary);
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(122, 25, 196, 0.05);
  }

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

export const UnsupportedMessage = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: rgba(214, 188, 250, 0.5);
  margin: 0;
  padding: 10px 20px;
  text-align: center;
  white-space: nowrap;
`;

// Detail variant styles
export const DetailBookCard = styled.div`
  flex: 1;
  border-top: 0.5px solid #d6bcfa;
  position: relative;
  min-height: 1px;
  min-width: 1px;
  width: 100%;
`;

export const DetailBookCardInner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 31px 26px;
  width: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

export const DetailBookCoverImage = styled.img`
  height: 225.956px;
  width: 154px;
  flex-shrink: 0;
  object-fit: cover;
`;

export const DetailBookInfoRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 1px;
  min-width: 1px;
`;

export const DetailBookInfoInner = styled.div`
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

export const DetailBookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const DetailBookTitle = styled.p`
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

export const DetailBookSubtitle = styled.p`
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

export const DetailBookAuthorRow = styled.div`
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

export const DetailBookPublisherRow = styled.div`
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

export const DetailBookPrice = styled.p`
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

export const DetailBookRatingRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const DetailTrophyIcon = styled.div`
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

export const DetailRatingText = styled.p`
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

export const DetailReviewCount = styled.p`
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

export const DetailBookActions = styled.div`
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
