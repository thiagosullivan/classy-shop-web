import { createContext, useState } from "react";

export const ModalProductContext = createContext();

export const ModalProductProvider = ({ children }) => {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const OpenProductDetailsModalFunction = () => {
    setOpenProductDetailsModal(true);
  };

  const CloseProductDetailsModalFunction = () => {
    setOpenProductDetailsModal(false);
  };

  const value = {
    OpenProductDetailsModalFunction,
    CloseProductDetailsModalFunction,
    openProductDetailsModal,
    setOpenProductDetailsModal,
  };

  return (
    <ModalProductContext.Provider value={value}>
      {children}
    </ModalProductContext.Provider>
  );
};
