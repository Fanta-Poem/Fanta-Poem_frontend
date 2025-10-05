import styled from "@emotion/styled";

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    #4285f4 0%,
    #34a853 50%,
    #fbbc05 75%,
    #ea4335 100%
  );
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

export default function GoogleIcon() {
  return <IconWrapper>G</IconWrapper>;
}
