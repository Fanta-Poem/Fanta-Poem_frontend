import * as S from "./loadingStyle";

const dragonImg = "/3d/dragon.svg";

export default function LoadingNotFound() {
  return (
    <S.Container>
      <S.MessageArea>
        <S.Message>음... 이 이야기는</S.Message>
        <S.Message>아직 발견되지 않은 것 같아요.</S.Message>
      </S.MessageArea>
      <S.ImageContainer>
        <S.DragonImage src={dragonImg} alt="드래곤" draggable="false" />
      </S.ImageContainer>
    </S.Container>
  );
}
