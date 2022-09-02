import { useState, createContext } from "react";

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
