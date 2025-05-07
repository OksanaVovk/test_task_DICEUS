import styled from "@emotion/styled";
export const StyledButton = styled.button`
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  border-radius: 50px;
 
  background-color: #3B82F6;
  color: #ffffff;
  cursor: pointer;
  
  &:hover,
  &:focus,
  &:active {
   background-color:rgb(24, 88, 192);


`;
