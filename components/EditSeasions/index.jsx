import { useForm } from "react-hook-form";
import styles from "./EditSeasions.module.css";
import { editAnime, insertAnime, getSeasions } from "@/services/index";
import { useState, useEffect, useContext } from "react";
import { SiglasContext } from "@/context/SiglasContext";

export default function EditSeasions() {
  const [seassions, setSeassions] = useState([]);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [id, list, setList] = useListIds("seasions");
  const [tittle, sinopsis, anime, num, seasion, media] = useSSeasion(id);

  const setabform = async (data) => {
    console.log(data);
    if (id) {
      editOpening(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertOpening(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getSeasions(siglasPage)
      .then((seasions) => {
        setSeasions(seasions.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setSeasions([]);
    };
  }, []);
  const increment = () => {
    console.log("====================================");
    console.log(siglasPage);
    console.log("====================================");
    let data = { code, tittle };
    setTittle("");
    setCode("");
    // insertGeneres(data).then((res) => {
    //   generesLista.push(res.data);
    //   changeGeneres(generesLista);
    setOpen(false);
    // });
  };

  return (
    <>
      <DyamondListIds list={seassions} changeList={(id) => setSeasions(id)} />

      <div className={styles.concret}>
        <input
          type="text"
          className={styles.input}
          placeholder="code del genero"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="translation del genero"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <input
          className={styles.input}
          type="button"
          onClick={increment}
          value="Crear filtro"
        />
      </div>
    </>
  );
}
