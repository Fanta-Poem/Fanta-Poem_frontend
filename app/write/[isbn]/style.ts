import styled from "@emotion/styled";

export const WriteContainer = styled.div`
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 41px 80px;
`;

export const WriteInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 82px);
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  flex: 1;
  min-height: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 0;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  min-height: 0;
`;

export const BookInfoCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 0;
`;

export const BookCover = styled.img`
  width: 135px;
  height: 202px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: flex-start;
`;

export const BookTitle = styled.h2`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin: 0;
  line-height: 1.4;
`;

export const BookMeta = styled.p`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 15px;
  color: #c7c7c7;
  margin: 0;
  line-height: 1.6;
`;

export const ReadingPeriod = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 14px;
  color: #999999;
  margin-top: 12px;
  line-height: 1.6;
`;

export const SectionTitle = styled.h3`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin: 0;
  margin-top: 8px;
`;

export const ReviewTextarea = styled.textarea`
  width: 100%;
  flex: 1;
  min-height: 250px;
  max-height: calc(100vh - 82px - 40px - 202px - 20px - 48px - 20px - 96px);
  background: transparent;
  border: 1px solid rgba(122, 25, 196, 0.5);
  border-radius: 16px;
  padding: 20px;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 15px;
  color: white;
  resize: none;
  outline: none;
  line-height: 1.6;

  &::placeholder {
    color: rgba(214, 188, 250, 0.3);
  }

  &:focus {
    border-color: rgba(122, 25, 196, 0.8);
  }
`;

export const PoemContainer = styled.div`
  width: 100%;
  flex: 1;
  min-height: 400px;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 27, 112, 1) 0%,
    rgba(48, 23, 66, 1) 50%,
    rgba(34, 22, 43, 1) 75%,
    rgba(20, 20, 20, 1) 100%
  );
  border: 1px solid rgba(122, 25, 196, 0.5);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  &:focus-within {
    border-color: rgba(122, 25, 196, 0.8);
  }
`;

export const PoemEditor = styled.div`
  width: 100%;
  height: 100%;
  font-family: "IM_Hyemin", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: white;
  text-align: center;
  outline: none;
  white-space: pre-wrap;

  &:empty::before {
    content: attr(data-placeholder);
    color: rgba(214, 188, 250, 0.3);
    white-space: pre-wrap;
  }

  /* 첫 번째 줄(제목)을 크게 */
  &::first-line {
    font-size: 28px;
    font-weight: bold;
    line-height: 2;
  }
`;

export const ButtonWrapper = styled.div`
  width: 200px;
  align-self: flex-end;
`;

export const LoadingMessage = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  color: #d6bcfa;
  text-align: center;
  padding: 40px;
`;

export const ErrorMessage = styled.div`
  font-family: "IM_Hyemin", sans-serif;
  font-size: 18px;
  color: #ff6b6b;
  text-align: center;
  padding: 40px;
`;
