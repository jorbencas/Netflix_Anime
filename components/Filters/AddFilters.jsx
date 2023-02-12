import { insertFilters } from "@/services/index";
import { ModalContext } from "@/context/ModalContext";
import { useContext, useState } from "react";
import ImputKindsFilters from "../InputsFilters/index";
import styles from "../EditAnime/EditAnime.module.css";

function AddFilters({
  changeTemporadasList,
  temporadasLista,
  changeGeneresList,
  generesLista,
}) {
  let kindList = ["generes", "temporadas", "languajes", "kinds"];
  const [code, setCode] = useState("");
  const [tittle, setTittle] = useState("");
  const [kind, setKind] = useState(
    kindList
      .filter((e) => {
        return e.includes("generes");
      })
      .shift()
  );
  const { setOpen } = useContext(ModalContext);

  const increment = () => {
    insertFilters({ code, tittle, kind }).then((res) => {
      if (res.data) {
        if (kind == "generes") {
          changeGeneresList([
            res.data,
            ...generesLista, // Put old items at the end
          ]);
        } else if (kind == "temporadas") {
          changeTemporadasList([
            res.data,
            ...temporadasLista, // Put old items at the end
          ]);
        }
        setOpen(false);
      }
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
            type="radio"
            key={i}
            changeKing={(e, t) => {
              setKind(e);
            }}
            ischecked={element === kind}
            value={element}
            label={element}
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
}
export default AddFilters;
