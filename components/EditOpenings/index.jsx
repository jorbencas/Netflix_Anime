import styles from "./EditOpenings.module.css";
import Media from "@/components/Media/index";
import { useOpening } from "@/hooks/useOpenings";
import DyamondListIds from "../DyamondListIds";

export default function EditOpenings() {
  const [
    id,
    list,
    setId,
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    num,
    setNum,
    media,
    setMedia,
    sendOpening,
  ] = useOpening("openings");

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={() => sendOpening}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
                placeholder="nombre"
              />
            </div>
            <div className={styles.concret}>
              <input
                type="text"
                className={styles.input}
                placeholder="descripcion"
                value={sinopsis}
                onChange={(e) => setSinopsis(e.target.value)}
              />
            </div>
            <Media
              media={media}
              changeMedia={(m) => {
                setMedia(m);
              }}
              kind="openings"
              id_external={id}
            />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
