import { useForm } from "react-hook-form";
import styles from "./EditAnime.module.css";
import {
  editAnime,
  insertAnime,
  getTemporadas,
  getGeneres,
  insertGeneres,
} from "@/services/index";
import Media from "@/components/Media/index";
import { useState, useEffect, useContext } from "react";
import Modal from "@/components/Modal";
import { ModalContext } from "@/context/ModalContext";
import { useAnime } from "@/hooks/useAnime";
import { SiglasContext } from "@/context/SiglasContext";

export default function EditAnime() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const { siglas, siglasPage } = useContext(SiglasContext);
  const [generesLista, setGeneresLista] = useState([]);
  const [temporadasLista, setTemporadasLista] = useState([]);
  const [
    tittle,
    sinopsis,
    date_publication,
    date_finalization,
    temporadas,
    generes,
    state,
    idioma,
    media,
  ] = useAnime(siglasPage);

  useEffect(() => {
    getGeneres()
      .then((genere) => {
        if (genere?.data) setGeneresLista(genere?.data);
      })
      .catch((err) => console.error(err));

    getTemporadas()
      .then((temporada) => {
        console.log("====================================");
        console.log(temporada);
        console.log("====================================");
        setTemporadasLista(temporada.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setGeneresLista([]);
      setTemporadasLista([]);
    };
  }, []);

  const setabform = async (data) => {
    data.siglas = siglasPage;
    console.log(data);
    if (siglas) {
      editAnime(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertAnime(data)
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
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={handleSubmit(setabform)}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                {...register("titulo")}
                placeholder="titulo"
              />
            </div>

            <input
              type="text"
              className={styles.input}
              placeholder="Sinopsis"
              {...register("sinopsis")}
            />
            <input
              className={styles.input}
              type="date"
              {...register("date_publication")}
              placeholder="Fecha de Publicación"
            />
            <input
              className={styles.input}
              type="date"
              {...register("date_finalization")}
              placeholder="Fecha de Finalización"
            />
            <div className={styles.concret}>
              <p>Estado: </p>
              <select {...register("state")}>
                <option value="pendiong">Pendiente</option>
                <option value="continues">En Emision</option>
                <option value="finalized">Finalizado</option>
              </select>
            </div>

            <div className={styles.concret}>
              <p>Idiomas: </p>
              <select {...register("idioma")}>
                <option value="spanish">Español</option>
                <option value="catalan">Catlan</option>
                <option value="japanise">Japones</option>
              </select>
            </div>
            <div className={styles.input_group + " " + styles.checkbox}>
              <p className={styles.label}> Generos: </p>
              {generesLista.length > 0
                ? generesLista.map((genere, i) => {
                    <InputCheckboxs
                      key={i}
                      register={register}
                      elements={generes}
                      element={genere}
                      kind="generes"
                    />;
                  })
                : "No hay generos"}
              {temporadasLista.length > 0
                ? temporadasLista.map((temporada, i) => {
                    <InputCheckboxs
                      key={i}
                      register={register}
                      elements={temporadas}
                      element={temporada}
                      kind="temporadas"
                    />;
                  })
                : "No hay temporadas"}
            </div>
            <Modal btnLabel="Añadir Filtros">
              <AddGeneres
                changeGeneres={(g) => {
                  setGeneresLista(g);
                }}
                generesLista={generesLista}
              />
            </Modal>
            <Media media={media} kind="animes" id_external={siglasPage} />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}

export const AddGeneres = ({ changeGeneres, generesLista, siglasPage }) => {
  const [code, setCode] = useState("");
  const [tittle, setTittle] = useState("");
  const { setOpen } = useContext(ModalContext);

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
  );
};

export const InputCheckboxs = ({ register, element, elements, kind }) => {
  let classActive = elements?.includes(element) ? "checked" : "";
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={element.code}
        {...register(`${kind}`)}
        {...classActive}
        value={element.code}
      />

      <label className={styles.label} htmlFor={element.code}>
        {element.tittle}
      </label>
    </>
  );
};
