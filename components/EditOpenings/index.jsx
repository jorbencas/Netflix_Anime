import styles from "./EditOpenings.module.css";
// import Media from "@/components/Media/index";
import { useOpening } from "@/hooks/useOpenings";
import { useListIds } from "@/hooks/useListIfs";
// import DyamondListIds from "";
import { insertOpening, editOpening } from "../../services/index";
import { Suspense, lazy } from "react";

const Media = lazy(() => import("@/components/Media/index"));
const DyamondListIds = lazy(() => import("../DyamondListIds"));
export default function EditOpenings() {
  const [id, list, setId] = useListIds("openings");
  const [tittle, sinopsis, anime, num, seasion, media, setMedia] =
    useOpening(id);

  const setabform = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime, num, seasion, media };
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

  return (
    <>
      <Suspense fallback={<h1>Loading media...</h1>}>
        <DyamondListIds list={list} changeList={(id) => setId(id)} />
      </Suspense>
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
              />
            </div>
            <Suspense fallback={<h1>Loading media...</h1>}>
              <Media
                media={media}
                changeMedia={(m) => {
                  setMedia(m);
                }}
                kind="openings"
                id_external={id}
              />
            </Suspense>
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
