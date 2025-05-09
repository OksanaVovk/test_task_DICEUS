"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./ModalStyled";
import { useModal } from "@/context";
import { AdditionalInfo } from "../AdditionalInfo";

const modalRoot =
  typeof window !== "undefined" ? document.getElementById("modal-root") : null;

export const Modal = () => {
  const { isOpen, open, close } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  if (!mounted) return null;

  return createPortal(
    isOpen ? (
      <Backdrop onClick={onBackdropClick}>
        <AdditionalInfo />
      </Backdrop>
    ) : null,
    modalRoot
  );
};
