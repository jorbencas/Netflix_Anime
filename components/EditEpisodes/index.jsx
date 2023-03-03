import styles from "./EditEpisodes.module.css";
import Media from "@/components/Media/index";
import { useEpisode } from "@/hooks/useEpisodes";
import DyamondListIds from "../DyamondListIds";
import MediaListProvider from "@/context/Media";
export default function EditEpisodes() {
  return (
    <MediaListProvider>
      <ComponentEpisodes />
    </MediaListProvider>
  );
}

function ComponentEpisodes() {
  const [
    id,
    list,
    setId,
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    num,
    sendEpisode,
  ] = useEpisode("episodes");

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={() => sendEpisode}>
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
                onChange={(e) => setSinopsis(e.target.value)}
              />
            </div>
            {/* <input
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
            /> */}
            <MediaListProvider>
              <Media />
            </MediaListProvider>
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
