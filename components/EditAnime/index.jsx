import styles from "./EditAnime.module.css";
import {
  editAnime,
  insertAnime,
  getTemporadas,
  getGeneres,
  insertFilters,
  getIdiomaLista,
} from "@/services/index";
import Media from "@/components/Media/index";
import { useState, useEffect, useContext } from "react";
import Modal from "@/components/Modal";
import { ModalContext } from "@/context/ModalContext";
import { useAnime } from "@/hooks/useAnime";
import { SiglasContext } from "@/context/SiglasContext";

export default function EditAnime() {
  const { siglas, siglasPage } = useContext(SiglasContext);
  const [idiomasLista, setIdiomasLista] = useState([]);
  const [generesLista, setGeneresLista] = useState([]);
  const [temporadasLista, setTemporadasLista] = useState([]);
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
    setTemporadas,
    generes,
    setGeneres,
    state,
    setState,
    idioma,
    setIdioma,
    media,
    setMedia,
  ] = useAnime(siglasPage);

  useEffect(() => {
    getGeneres()
      .then((genere) => {
        if (genere?.data) {
          setGeneresLista(genere?.data);
        }
      })
      .catch((err) => console.error(err));

    getTemporadas()
      .then((genere) => {
        if (genere?.data) {
          setTemporadasLista(genere?.data);
        }
      })
      .catch((err) => console.error(err));

    getIdiomaLista()
      .then((idiomas) => {
        if (idiomas?.data) setIdiomasLista(idiomas?.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setGeneresLista([]);
      setTemporadasLista([]);
      setIdiomasLista([]);
    };
  }, []);

  const change = (id, kind) => {
    console.log(kind + ": " + id);
    let list = {};
    if (kind == "generes") {
      list[kind] = generes;
    } else {
      list[kind] = temporadas;
    }
    let content;

    if (list[kind].includes(id)) {
      content = list[kind].filter((e) => e !== id);
    } else {
      content = [
        id,
        ...list[kind], // Put old items at the end
      ];
    }

    if (kind == "generes") {
      setGeneres(content);
    } else {
      setTemporadas(content);
    }

    console.log(list);
  };

  const setabform = async () => {
    if (media.length == 0) return;
    let data = {
      siglas: siglasPage,
      tittle,
      sinopsis,
      date_publication,
      date_finalization,
      temporadas,
      generes,
      state,
      idioma,
      media,
    };
    if (siglas) {
      // editAnime(data)
      //   .then((result) => {
      //     console.log("====================================");
      //     console.log(result);
      //     console.log("====================================");
      //   })
      //   .catch((err) => console.error(err));
    } else {
      console.log(data);
      // insertAnime(data)
      // .then((result) => {
      //   console.log("====================================");
      //   console.log(result);
      //   console.log("====================================");
      // })
      // .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={setabform}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
                placeholder="titulo"
              />
            </div>

            <textarea
              className={styles.input}
              placeholder="Sinopsis"
              value={sinopsis}
              onChange={(e) => setSinopsis(e.target.value)}
            />
            <input
              className={styles.input}
              type="date"
              value={date_publication}
              onChange={(e) => setDate_publication(e.target.value)}
              placeholder="Fecha de Publicación"
            />
            <input
              className={styles.input}
              type="date"
              value={date_finalization}
              onChange={(e) => setDate_finalization(e.target.value)}
              placeholder="Fecha de Finalización"
            />
            <div className={styles.concret}>
              <p>Idiomas: </p>
              <select
                value={idioma}
                onChange={(e) => setIdioma(e.target.value)}
              >
                {idiomasLista.map((e, i) => {
                  return (
                    <option key={i} value={e.code}>
                      {e.tittle}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.concret}>
              <p>Estado: </p>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="pendiong">Pendiente</option>
                <option value="continues">En Emision</option>
                <option value="finalized">Finalizado</option>
              </select>
            </div>

            <div className={styles.input_group + " " + styles.checkbox}>
              <p className={styles.label}> Generos: </p>
              {generesLista.length > 0
                ? generesLista.map((item, i) => {
                    return <ImputKindsFilters
                      type="checkbox"
                      key={i}
                      changeKing={(e) => change(e, "generes")}
                      ischecked={generes.includes(item.code.trim())}
                      value={item.code}
                      label={item.tittle}
                      i={i}
                    />;
                  })
                : "No hay generos"}
            </div>
            <div className={styles.input_group + " " + styles.checkbox}>
              <p className={styles.label}> Temporadas: </p>
              {temporadasLista.length > 0
                ? temporadasLista.map((item, i) => {
                    return <ImputKindsFilters
                      type="checkbox"
                      key={i}
                      changeKing={(e) => change(e, "temporadas")}
                      ischecked={temporadas.includes(item.code.trim())}
                      value={item.code}
                      label={item.tittle}
                      i={i}
                    />;
                  })
                : "No hay temporadas"}
            </div>

            {/* <Modal btnLabel="Añadir Filtros">
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
            </Modal> */}
            {/* <Suspense fallback={<h1>Loading media...</h1>}> */}
            <Media
              media={media}
              changeMedia={(m) => {
                setMedia(m);
              }}
              kind="animes"
              id_external={siglasPage}
            />
            {/* </Suspense> */}
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}

// export const AddFilters = ({
//   changeTemporadasList,
//   temporadasLista,
//   changeGeneresList,
//   generesLista,
// }) => {
//   let kindList = ["generes", "temporadas", "languajes", "kinds"];
//   const [code, setCode] = useState("");
//   const [tittle, setTittle] = useState("");
//   const [kind, setKind] = useState(
//     kindList
//       .filter((e) => {
//         return e.includes("generes");
//       })
//       .shift()
//   );
//   const { setOpen } = useContext(ModalContext);

//   const increment = () => {
//     insertFilters({ code, tittle, kind }).then((res) => {
//       if (res.data) {
//         if (kind == "generes") {
//           changeGeneresList([
//             res.data,
//             ...generesLista, // Put old items at the end
//           ]);
//         } else if (kind == "temporadas") {
//           changeTemporadasList([
//             res.data,
//             ...temporadasLista, // Put old items at the end
//           ]);
//         }
//         setOpen(false);
//       }
//       return () => {
//         setTittle("");
//         setCode("");
//         setKind(
//           kindList
//             .filter((e) => {
//               return e.includes("generes");
//             })
//             .shift()
//         );
//       };
//     });
//   };

//   return (
//     <div className={styles.concret}>
//       <input
//         type="text"
//         className={styles.input}
//         placeholder={`codigo del` + kind}
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />
//       <input
//         type="text"
//         className={styles.input}
//         placeholder={`translation del ` + kind}
//         value={tittle}
//         onChange={(e) => setTittle(e.target.value)}
//       />
//       {kindList.map((element, i) => {
//         return (
//           <ImputKindsFilters
//             type="radio"
//             key={i}
//             changeKing={(e, t) => {
//               console.log("====================================");
//               console.log(t);
//               console.log("====================================");
//               setKind(e);
//             }}
//             ischecked={value === kind}
//             value={element}
//             label={element}
//             i={i}
//           />
//         );
//       })}
//       <input
//         className={styles.input}
//         type="button"
//         onClick={increment}
//         value="Crear filtro"
//       />
//     </div>
//   );
// };

const ImputKindsFilters = ({
  type,
  changeKing,
  label,
  value,
  ischecked,
  i,
}) => {
  return (
    <>
      <input
        type={type}
        className={styles.checkbox}
        id={i}
        checked={ischecked}
        onChange={(e) => changeKing(e.target.value, type)}
        value={value}
      />

      <label className={styles.label} htmlFor={i}>
        {label}
      </label>
    </>
  );
};
