import styles from "./EditEndings.module.css";
import Media from "@/components/Media/index";
import { useEnding } from "../../hooks/useEndings";
import DyamondListIds from "../DyamondListIds";

export default function EditEndings() {
  const [
    id,
    list,
    setId,
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    num,
    media,
    setMedia,
    sendEnding,
  ] = useEnding("endings");

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={sendEnding}>
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
              kind="endings"
              id_external={id}
            />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
