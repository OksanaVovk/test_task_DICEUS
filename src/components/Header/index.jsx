"use client";
import data from "../../data/mainData.json";
import { AvatarIcon } from "../AvatarIcon";
import { SearchField } from "../SearchField";
import {
  HeaderLargeBox,
  HeaderMiddleBox,
  HeaderSmallBox,
  HeaderSearchBox,
  HeaderAvatarBox,
  Title,
} from "./HeaderStyled";
import { useState } from "react";
export const Header = () => {
  const [value, setValue] = useState("");
  return (
    <HeaderLargeBox>
      <HeaderMiddleBox>
        <Title>
          Hi {data.user}, welcome! You have {data.openTasks} open tasks.
        </Title>
        <HeaderSmallBox>
          <HeaderSearchBox>
            <SearchField
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </HeaderSearchBox>
          <HeaderAvatarBox>
            <AvatarIcon text="Arthur" />
          </HeaderAvatarBox>
        </HeaderSmallBox>
      </HeaderMiddleBox>
    </HeaderLargeBox>
  );
};
