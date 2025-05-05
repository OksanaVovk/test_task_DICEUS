import styled from "@emotion/styled";
export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 47px;
  padding: 0 17px;
  border-radius: 50px;
  border: #313b54 1px solid;
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
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledSvg = styled.svg`
  width: 18px;
  height: 18px;
  color: currentColor;
  margin-right: 10px;
`;
