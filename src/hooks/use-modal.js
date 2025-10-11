import { useContext } from "react";
import { ModalProductContext } from "../contexts/AppContext";

export const useModal = () => {
  const context = useContext(ModalProductContext);
  if (!context) {
    throw new Error("useModal precisa do ModalProductProvider");
  }
  return context;
};
