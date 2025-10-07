import styled from "@emotion/styled";

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
