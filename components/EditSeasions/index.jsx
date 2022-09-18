import { useForm } from "react-hook-form";
import styles from "./EditSeasions.module.css";
import { editOpening, insertOpening } from "@/services/index";
import { useSeasion } from "@/hooks/useSeasions";
import { useListIds } from "@/hooks/useListIfs";
import DyamondListIds from "../DyamondListIds";

export default function EditSeasions() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [id, list, setList] = useListIds("seasions");
  const [tittle, setTittle] = useSeasion(id);

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
      <DyamondListIds list={list} changeList={(id) => setList(id)} />
      <div className={styles.concret}>
        <input
          type="text"
          className={styles.input}
          placeholder="titulo de la temporada"
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
