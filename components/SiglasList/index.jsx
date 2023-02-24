import styles from "./SiglasList.module.css";
import { useSiglas } from "@/hooks/useSiglas";
import { defaultSiglas } from "../../services";
import { useState, useEffect } from "react";

const SiglasList = () => {
  const [siglasPage, changeSiglas] = useSiglas();
  const [siglasLista, setSiglasLista] = useState([]);

  useEffect(() => {
    defaultSiglas()
      .then((si) => {
        setSiglasLista(si.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setSiglasLista([]);
    };
  }, []);

  return (
    <>
      <select onChange={changeSiglas}>
        <option value="else">ninguna de ellas</option>
        {siglasLista.length > 0 &&
          siglasLista.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
      </select>
      {!siglasPage ? (
        <input
          type="text"
          className={styles.input}
          placeholder="Siglas"
          value={siglasPage}
          onChange={changeSiglas}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default SiglasList;
