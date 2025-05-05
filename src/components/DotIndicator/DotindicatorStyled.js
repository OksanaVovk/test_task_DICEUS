import styled from "@emotion/styled";

export const DotBox = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "10px")};
  height: ${({ height }) => (height ? `${height}px` : "10px")};
  border-radius: 50%;
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : "0px"};
  background: ${({ background }) => (background ? `${background}` : "#3BB979")};
  flex-shrink: 0;
`;
