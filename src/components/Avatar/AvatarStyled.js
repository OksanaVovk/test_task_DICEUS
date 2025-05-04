import styled from "@emotion/styled";

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  border-radius: 50%;
  background: linear-gradient(135deg, #1e40af 30%, #1e90ff 100%);
  color: #ffffff;
  font-size: ${({ fontSize }) => fontSize}px;
  text-transform: uppercase;
`;
