import styles from "./EditSeasions.module.css";
import { useSeasion } from "@/hooks/useSeasions";
import DyamondListIds from "../DyamondListIds";

export default function EditSeasions() {
  const { list, setList, tittle, setTittle, sendSeasion } =
    useSeasion("seasions");

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setList(id)} />
      <form className={styles.concret} onSubmit={() => sendSeasion}>
        <input
          type="text"
          className={styles.input}
          placeholder="titulo de la temporada"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <input className={styles.input} type="submit" value="Crear temporada" />
      </form>
    </>
  );
}
