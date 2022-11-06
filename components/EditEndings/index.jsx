import styles from "./EditEndings.module.css";
import Media from "@/components/Media/index";
import { useEnding } from "../../hooks/useEndings";
import { useListIds } from "@/hooks/useListIfs";
import DyamondListIds from "../DyamondListIds";
import { insertEnding, editEnding } from "@/services/index";

export default function EditEndings() {
  const [id, list, setId] = useListIds("endings");
  const [
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    anime,
    num,
    seasion,
    setSeasion,
    media,
    setMedia,
  ] = useEnding(id);

  const setabform = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime, num, seasion, media };
    console.log(data);
    if (id) {
      editEnding(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertEnding(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={setabform}>
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
