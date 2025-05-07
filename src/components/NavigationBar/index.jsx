"use client";
import { ButtonIcon } from "../ButtonIcon";
import { useRouter, usePathname } from "next/navigation";
import { useRef } from "react";
import {
  List,
  Item,
  ButtonArrow,
  Svg,
  ButtonList,
  ButtonItem,
  ScrollBox,
  Box,
} from "./NavigationBarStyled";

const buttons = [
  {
    id: 1,
    icon: "/icons.svg#icon-home",
    text: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: "/icons.svg#icon-accounts",
    text: "Accounts",
    path: "/accounts",
  },
  {
    id: 3,
    icon: "/icons.svg#icon-brokers",
    text: "Brokers",
    path: "/brokers",
  },
  {
    id: 4,
    icon: "/icons.svg#icon-submissions",
    text: "Submissions",
    path: "/submissions",
  },
  {
    id: 5,
    icon: "/icons.svg#icon-organizations",
    text: "Organizations",
    path: "/organizations",
  },
  {
    id: 6,
    icon: "/icons.svg#icon-goals",
    text: "Goals & Rules",
    path: "/goals",
  },
  {
    id: 7,
    icon: "/icons.svg#icon-admin",
    text: "Admin",
    path: "/admin",
  },
  {
    id: 8,
    icon: "/icons.svg#icon-admin",
    text: "Admin",
    path: "/admin",
  },
  {
    id: 9,
    icon: "/icons.svg#icon-admin",
    text: "Admin",
    path: "/admin",
  },
  {
    id: 10,
    icon: "/icons.svg#icon-admin",
    text: "Admin",
    path: "/admin",
  },
  {
    id: 11,
    icon: "/icons.svg#icon-admin",
    text: "Admin",
    path: "/admin",
  },
];

export const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollRef = useRef();

  const scroll = (dir) => {
    const amount = 150;
    if (dir === "left") scrollRef.current.scrollLeft -= amount;
    if (dir === "right") scrollRef.current.scrollLeft += amount;
  };

  const basePath = "/" + pathname.split("/")[1];

  return (
    <Box>
      <ScrollBox ref={scrollRef}>
        <List>
          {buttons.map((button) => (
            <Item key={button.id}>
              <ButtonIcon
                icon={button.icon}
                text={button.text}
                onClick={() => {
                  router.push(button.path);
                }}
                isActive={basePath === button.path}
              />
            </Item>
          ))}
        </List>
      </ScrollBox>

      <ButtonList>
        <ButtonItem>
          <ButtonArrow onClick={() => scroll("left")}>
            <Svg>
              <use href="/icons.svg#icon-arrow-left" />
            </Svg>
          </ButtonArrow>
        </ButtonItem>
        <ButtonItem>
          <ButtonArrow onClick={() => scroll("right")}>
            <Svg>
              <use href="/icons.svg#icon-arrow-right" />
            </Svg>
          </ButtonArrow>
        </ButtonItem>
      </ButtonList>
    </Box>
  );
};
