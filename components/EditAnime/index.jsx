import styles from "./EditAnime.module.css";
import { insertFilters } from "@/services/index";
import Media from "@/components/Media/index";
import Modal from "@/components/Modal";
import { ModalContext } from "@/context/ModalContext";
import { useAnime } from "@/hooks/useAnime";

export default function EditAnime() {
  const [
    siglasPage,
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
    media,
    setMedia,
    sendAnime,
    idiomasLista,
    generesLista,
    temporadasLista,
    setFilters,
  ] = useAnime();

  return (
    <div className={styles.wrap}>
      <div className={styles.contenedor_formulario}>
        <form className={styles.concret} onSubmit={sendAnime}>
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
            <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
              {idiomasLista.map(({ tittle, code }, i) => (
                <option key={i} value={code}>
                  {tittle}
                </option>
              ))}
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
          <Media
            media={media}
            changeMedia={(m) => {
              setMedia(m);
            }}
            kind="animes"
            id_external={siglasPage}
          />
          <input className={styles.input} type="submit" value="Crear" />
        </form>
      </div>
    </div>
  );
}

export const ListFilters = ({ kind, listOriginal, list, onchange }) => {
  if (list.length == 0) return `No hay ${kind}`;
  const changeValues = (value, id) => {
    let k = id.split("_");
    onchange(value, k[1]);
  };
  return (
    <div className={styles.concret}>
      <p> {kind}: </p>
      <div className={styles.input_group + " " + styles.checkbox}>
        {list.map(({ code, tittle }, i) => (
          <ImputKindsFilters
            type="checkbox"
            key={i}
            changeKing={(e) => {
              changeValues(e.value, e.id);
            }}
            ischecked={listOriginal.includes(code.trim())}
            value={code}
            label={tittle}
            i={i + "_" + kind}
          />
        ))}
      </div>
    </div>
  );
};

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
        onChange={(e) => changeKing(e.target)}
        value={value}
      />

      <label className={styles.label} htmlFor={i}>
        {label}
      </label>
    </>
  );
};
