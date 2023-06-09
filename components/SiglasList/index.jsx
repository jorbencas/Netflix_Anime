import styles from "./SiglasList.module.css";
import { useSiglas } from "@/hooks/useSiglas";
import { defaultSiglas } from "../../services";
import { useState, useEffect } from "react";

const SiglasList = () => {
  const { changeSiglas } = useSiglas();
  const [siglasLista, setSiglasLista] = useState([]);

  useEffect(() => {
    defaultSiglas()
      .then((si) => {
        if (si.status.code === 200) {
          setSiglasLista(si.data);
        }
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
          siglasLista.map(({ saga, siglas }, i) => (
            <option key={i} value={siglas} saga={saga}>
              {sigla}
            </option>
          ))}
      </select>
    </>
  );
};
export default SiglasList;
