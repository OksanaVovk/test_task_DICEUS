"use client";
import { ModalWindow, Title, ModalButton } from "./AdditionalInfoStyled";
import { useModal } from "@/context";

export const AdditionalInfo = () => {
  const { close } = useModal();

  const onBtnClick = () => {
    try {
      close();
    } catch {
      console.log(Error);
    }
  };

  return (
    <ModalWindow>
      <ModalButton onClick={onBtnClick}>X</ModalButton>

      <Title>Additional information</Title>
    </ModalWindow>
  );
};
