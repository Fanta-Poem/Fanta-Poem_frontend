import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 92px 20px;
  width: 100%;
  min-height: 400px;
`;

export const MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const Message = styled.p`
  font-family: "IM_Hyemin";
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: white;
  text-align: center;
  margin: 0;
  white-space: pre;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 182px;
  height: 182px;
`;

export const DragonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.25));
  -webkit-user-drag: none;
`;
