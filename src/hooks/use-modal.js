import { useContext } from "react";
import { ModalProductContext } from "../contexts/ModalContext";

export const useModal = () => {
  const context = useContext(ModalProductContext);
  if (!context) {
    throw new Error("useModal precisa do ModalProductProvider");
  }
  return context;
};
