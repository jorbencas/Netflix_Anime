import { createContext, useState } from "react";

export const MediaContext = createContext({});

export function MediaListProvider({ children }) {
  const [media, setMedia] = useState({});
  const [kind, setKind] = useState("");
  const [id_external, setId_external] = useState("");

  return (
    <MediaContext.Provider
      value={{ media, setMedia, kind, setKind, id_external, setId_external }}
    >
      {children}
    </MediaContext.Provider>
  );
}
