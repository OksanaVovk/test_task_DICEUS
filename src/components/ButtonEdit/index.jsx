"use client";
import { useModal } from "@/context";
import { Button, StyledSvg } from "./ButtonEditStyled";
export const ButtonEdit = () => {
  const { open } = useModal();

  const openModal = () => {
    open();
  };
  return (
    <Button onClick={openModal}>
      <StyledSvg>
        <use href="/icons.svg#icon-group-button" />
      </StyledSvg>
    </Button>
  );
};
