import styles from "./EditEpisodes.module.css";
import Media from "@/components/Media/index";
import { useEpisode } from "@/hooks/useEpisodes";
import { useListIds } from "@/hooks/useListIfs";
import DyamondListIds from "../DyamondListIds";
import { insertEpisode, editEpisode } from "@/services/index";
import { Suspense, lazy } from "react";
// const Media = lazy(() => import("@/components/Media/index"));
// const DyamondListIds = lazy(() => import("../DyamondListIds"));
export default function EditEpisodes() {
  const [id, list, setId] = useListIds("episodes");
  const [tittle, sinopsis, anime, num, seasion, media, setMedia] =
    useEpisode(id);

  const setabform = async () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime, num, seasion, media };
    console.log(data);
    if (id) {
      editEpisode(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertEpisode(data)
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
      {/* <Suspense fallback={<h1>Loading media...</h1>}> */}
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      {/* </Suspense> */}
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={handleSubmit(setabform)}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
                placeholder="Titulo "
              />
            </div>
            <div className={styles.concret}>
              <input
                type="text"
                className={styles.input}
                placeholder="Sinopsis"
                value={sinopsis}
              />
            </div>
            <input
              className={styles.input}
              type="date"
              value={date_publication}
              placeholder="Fecha de Publicación"
            />
            <input
              className={styles.input}
              type="date"
              value={date_finalization}
              placeholder="Fecha de Finalización"
            />
            {/* <Suspense fallback={<h1>Loading media...</h1>}> */}
            <Media
              media={media}
              changeMedia={(m) => {
                setMedia(m);
              }}
              kind="episodes"
              id_external={id}
            />
            {/* </Suspense> */}
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
