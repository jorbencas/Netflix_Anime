import { createContext, useState } from "react";

export const SeasionContext = createContext();

export function SeasionListProvider({ children }) {
  const [seasion, setSeasion] = useState(0);

  return (
    <SeasionContext.Provider value={{ seasion, setSeasion }}>
      {children}
    </SeasionContext.Provider>
  );
}
