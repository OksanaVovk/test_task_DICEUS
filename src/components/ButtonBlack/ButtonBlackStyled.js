import styled from "@emotion/styled";
export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0 17px;
  border-radius: 50px;
   background-color: ${({ $active }) => ($active ? "#3b82f6" : "#0C0F17")};
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
