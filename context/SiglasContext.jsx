import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const SiglasContext = createContext();

export function SiglasListProvider({ children }) {
  const href = useRouter();
  const { siglas } = href.query;
  let s = siglas ? siglas : "";
  const [siglasPage, setSiglasPage] = useState(s);

  return (
    <SiglasContext.Provider value={{ siglas, siglasPage, setSiglasPage }}>
      {children}
    </SiglasContext.Provider>
  );
}
