import styles from "./EditAnime.module.css";
import Media from "@/components/Media/index";
import Modal from "@/components/Modal";
import useAnime from "@/hooks/useAnime";
import AddFilters from "../Filters/AddFilters";
import ListFilters from "../Filters/ListFilters";
import MediaListProvider from "@/context/Media";

export default function EditAnime() {
  return (
    <MediaListProvider>
      <ComponentAnime />
    </MediaListProvider>
  );
}

function ComponentAnime() {
  const [
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    date_publication,
    setDate_publication,
    date_finalization,
    setDate_finalization,
    temporadas,
    generes,
    state,
    setState,
    idioma,
    setIdioma,
    sendAnime,
    idiomasLista,
    generesLista,
    temporadasLista,
    setFilters,
  ] = useAnime(true);

  return (
    <div className={styles.wrap}>
      <div className={styles.contenedor_formulario}>
        <form className={styles.concret} onSubmit={() => sendAnime}>
          <div className={styles.contenedor_inputs}>
            <input
              type="text"
              className={styles.input}
              defaultValue={tittle}
              onChange={(e) => setTittle(e.target.value)}
              placeholder="titulo"
            />
          </div>

          <textarea
            className={styles.input}
            placeholder="Sinopsis"
            defaultValue={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
          />
          <input
            className={styles.input}
            type="date"
            defaultValue={date_publication}
            onChange={(e) => setDate_publication(e.target.value)}
            placeholder="Fecha de Publicación"
          />
          <input
            className={styles.input}
            type="date"
            defaultValue={date_finalization}
            onChange={(e) => setDate_finalization(e.target.value)}
            placeholder="Fecha de Finalización"
          />
          <div className={styles.concret}>
            <p>Idiomas: </p>
            <select
              multiple={false}
              defaultValue={idioma}
              onChange={(e) => setIdioma(e.target.value)}
            >
              {idiomasLista.lenght > 0
                ? idiomasLista.map(({ tittle, code }, i) => (
                    <option key={i} value={code}>
                      {tittle}
                    </option>
                  ))
                : ""}
            </select>
          </div>

          <div className={styles.concret}>
            <p>Estado: </p>
            <select
              multiple={false}
              defaultValue={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="pendiong">Pendiente</option>
              <option value="continues">En Emision</option>
              <option value="finalized">Finalizado</option>
            </select>
          </div>

          <ListFilters
            key="0"
            kind="Generes"
            listOriginal={generes}
            list={generesLista}
            onchange={(e, kind) => {
              setFilters(e, kind);
            }}
          />

          <ListFilters
            key="1"
            kind="Temporadas"
            listOriginal={temporadas}
            list={temporadasLista}
            onchange={(e, kind) => {
              setFilters(e, kind);
            }}
          />

          <Modal btnLabel="Añadir Filtros">
            <AddFilters
              changeTemporadasList={(g) => {
                setTemporadasLista(g);
              }}
              temporadasLista={temporadasLista}
              changeGeneresList={(g) => {
                setGeneresLista(g);
              }}
              generesLista={generesLista}
            />
          </Modal>
          {/* <Media /> */}
          <input className={styles.input} type="submit" value="Crear" />
        </form>
      </div>
    </div>
  );
}
