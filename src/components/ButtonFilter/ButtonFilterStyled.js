import styled from "@emotion/styled";
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 50px;
  border: #3B82F6 1px solid;
    width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
   background-color: ${({ $active }) => ($active ? "#3b82f6" : "transparent")};
  color: ${({ $active }) => ($active ? "#c5cad3" : "#3b82f6")};
  cursor: pointer;
  
  &:hover,
  &:focus,
  &:active {
   background-color: #3b82f6;
    color: #c5cad3;

`;

export const Text = styled.span`
  color: #c5cad3;
  font-size: 14px;
`;
