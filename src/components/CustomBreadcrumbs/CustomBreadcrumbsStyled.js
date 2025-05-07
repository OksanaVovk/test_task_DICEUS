import styled from "@emotion/styled";
import Link from "next/link";

export const NavCatalogListBox = styled("ul")`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;
export const NavCatalogItemBox = styled("li")`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
`;

export const NavCatalogText = styled("p")`
  margin-left: 4px;
  margin-right: 4px;
`;

export const LinkNav = styled(Link)`  
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #3B82F6;
  `;
