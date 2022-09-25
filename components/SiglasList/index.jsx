import styles from "./SiglasList.module.css";
import { useSiglas } from "@/hooks/useSiglas";
import { SiglasListProvider } from "@/context/SiglasContext";
import { useEffect } from "react";

const SiglasContainer = ({ children }) => {
  const [siglas, siglasLista, siglasPage, changeSiglasList] = useSiglas();

  useEffect(() => {
    console.log("Dentro de SiglasContainer");
  }, []);

  return (
    <>
      <select onChange={changeSiglasList}>
        <option value="else">ninguna de ellas</option>
        {siglasLista &&
          siglasLista.length > 0 &&
          siglasLista.map((s, i) => {
            return (
              <option key={i} value={s}>
                {s}
              </option>
            );
          })}
      </select>
      {!siglas ? (
        <input
          type="text"
          className={styles.input}
          placeholder="Siglas"
          value={siglasPage}
          onChange={changeSiglasList}
        />
      ) : (
        ""
      )}
      {children}
    </>
  );
};

export default function SiglasList({ children }) {
  return (
    <SiglasListProvider>
      <SiglasContainer children={children} />
    </SiglasListProvider>
  );
}
