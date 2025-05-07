import styled from "@emotion/styled";
import Link from "next/link";

export const LinkNav = styled(Link)` 
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
font-size:14px;  
color: #3B82F6;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color:rgb(24, 88, 192);
  `;

export const StyledSvg = styled.svg`
  width: 14px;
  height: 8px;
  color: currentColor;
`;
