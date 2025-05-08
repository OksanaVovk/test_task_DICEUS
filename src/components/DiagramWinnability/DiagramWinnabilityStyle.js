import styled from "@emotion/styled";
export const GradientBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "20px")};
  padding-right: 5px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: ${({ background }) =>
    background
      ? `${background}`
      : `linear-gradient(to right, #313853, #3b82f6)`};
`;
