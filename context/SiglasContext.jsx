import { createContext, useState } from "react";

export const SiglasContext = createContext();

export function SiglasListProvider({ children }) {
  const [siglasPage, setSiglasPage] = useState("");

  return (
    <SiglasContext.Provider value={{ siglasPage, setSiglasPage }}>
      {children}
    </SiglasContext.Provider>
  );
}
