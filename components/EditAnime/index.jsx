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
        setTemporadasLista(temporada?.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setGeneresLista([]);
      setTemporadasLista([]);
    };
  }, []);

  const setabform = async (data) => {
    if (media.length == 0) return;
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

            <textarea
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
                    return (
                      <InputCheckboxs
                        key={i}
                        register={register}
                        elements={generes}
                        element={genere}
                        kind="generes"
                      />
                    );
                  })
                : "No hay generos"}
              {temporadasLista.length > 0
                ? temporadasLista.map((temporada, i) => {
                    return (
                      <InputCheckboxs
                        key={i}
                        register={register}
                        elements={temporadas}
                        element={temporada}
                        kind="temporadas"
                      />
                    );
                  })
                : "No hay temporadas"}
            </div>
            <Modal btnLabel="Añadir Filtros">
              <AddGeneres
                changeTemporadas={(g) => {
                  setTemporadasLista(g);
                }}
                temporadasLista={temporadasLista}
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

export const AddGeneres = ({
  changeTemporadas,
  temporadasLista,
  changeGeneres,
  generesLista,
}) => {
  let kindList = ["generes", "temporadas", "languajes", "kinds", "years"];
  const [code, setCode] = useState("");
  const [tittle, setTittle] = useState("");
  const [kind, setKind] = useState("");
  const { setOpen } = useContext(ModalContext);

  useEffect(() => {
    setKind(
      kindList
        .filter((e) => {
          return e.includes("generes");
        })
        .shift()
    );
  }, []);
  ("");

  const increment = () => {
    insertGeneres({ code, tittle, kind }).then((res) => {
      if (kind == "generes") {
        generesLista.push(res.data);
        changeGeneres(generesLista);
      } else if (kind == "temporadas") {
        if (res.data) {
          console.log("====================================");
          console.log(typeof res.data);
          console.log("====================================");
          temporadasLista.push(res.data);
          changeTemporadas(temporadasLista);
        }
      }
      setOpen(false);

      return () => {
        setTittle("");
        setCode("");
        setKind(
          kindList
            .filter((e) => {
              return e.includes("generes");
            })
            .shift()
        );
      };
    });
  };

  return (
    <div className={styles.concret}>
      <input
        type="text"
        className={styles.input}
        placeholder={`codigo del` + kind}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder={`translation del ` + kind}
        value={tittle}
        onChange={(e) => setTittle(e.target.value)}
      />
      {kindList.map((element, i) => {
        return (
          <ImputKindsFilters
            key={i}
            changeKing={(e) => setKind(e)}
            kind={kind}
            element={element}
            i={i}
          />
        );
      })}
      <input
        className={styles.input}
        type="button"
        onClick={increment}
        value="Crear filtro"
      />
    </div>
  );
};

export const ImputKindsFilters = ({ changeKing, element, kind, i }) => {
  return (
    <>
      <input
        type="radio"
        className={styles.checkbox}
        id={i}
        name="kinsfilters"
        checked={element === kind}
        onChange={(e) => changeKing(e.target.value)}
        value={element}
      />

      <label className={styles.label} htmlFor={i}>
        {element}
      </label>
    </>
  );
};

export const InputCheckboxs = ({ register, element, elements, kind }) => {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        id={element.code}
        {...register(`${kind}`)}
        checked={elements?.includes(element)}
        value={element.code}
      />

      <label className={styles.label} htmlFor={element.code}>
        {element.tittle}
      </label>
    </>
  );
};
