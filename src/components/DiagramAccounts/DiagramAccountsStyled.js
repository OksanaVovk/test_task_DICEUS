import styled from "@emotion/styled";

export const Diagram = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "197px")};
  height: ${({ height }) => (height ? `${height}px` : "30px")};
  background-color: #313853;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const GradientBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: ${({ percent }) => (percent ? `${percent}%` : "100%")};
  padding-right: 5px;

  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(to right, #313853, #3b82f6);
`;
