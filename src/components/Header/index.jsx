"use client";
import { Avatar } from "../Avatar";
import { SearchField } from "../SearchField";
import {
  HeaderBox,
  HeaderSmallBox,
  HeaderSearchBox,
  HeaderAvatarBox,
} from "./HeaderStyled";
import { useState } from "react";
export const Header = () => {
  const [value, setValue] = useState("");
  return (
    <HeaderBox>
      <p>Hi Arthur, welcome! You have 12 open tasks.</p>
      <HeaderSmallBox>
        <HeaderSearchBox>
          <SearchField
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </HeaderSearchBox>
        <HeaderAvatarBox>
          <Avatar text="Arthur" />
        </HeaderAvatarBox>
      </HeaderSmallBox>
    </HeaderBox>
  );
};
