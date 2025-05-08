/* eslint-disable react/jsx-no-comment-textnodes */
import { usePathname } from "next/navigation";

import {
  NavCatalogItemBox,
  NavCatalogText,
  NavCatalogListBox,
  LinkNav,
} from "./CustomBreadcrumbsStyled";

export const CustomBreadcrumbs = ({ name }) => {
  const pathname = usePathname();
  return (
    <NavCatalogListBox>
      <NavCatalogItemBox>
        <LinkNav
          href="/"
          style={{
            color: pathname === "/" ? "#3B82F6" : "#E5E7EB",
          }}
        >
          Dashboard
        </LinkNav>
      </NavCatalogItemBox>
      <NavCatalogItemBox>
        <NavCatalogText>//</NavCatalogText>
        <LinkNav
          href="/accounts"
          style={{
            color: pathname === "/accounts" ? "#3B82F6" : "#E5E7EB",
          }}
        >
          Accounts
        </LinkNav>
      </NavCatalogItemBox>
      {name ? (
        <NavCatalogItemBox>
          <NavCatalogText>//</NavCatalogText>
          <NavCatalogText
            style={{
              color: "#3B82F6",
            }}
          >
            {name}
          </NavCatalogText>
        </NavCatalogItemBox>
      ) : (
        ""
      )}
    </NavCatalogListBox>
  );
};
