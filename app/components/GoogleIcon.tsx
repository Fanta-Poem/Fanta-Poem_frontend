import styled from "@emotion/styled";
import Image from "next/image";

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GoogleIcon() {
  return (
    <IconWrapper>
      <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
    </IconWrapper>
  );
}
