import { useForm } from "react-hook-form";
import styles from "./EditOpenings.module.css";
import Media from "@/components/Media/index";
import { useOpening } from "@/hooks/useOpenings";
import { useListIds } from "@/hooks/useListIfs";
import DyamondListIds from "../DyamondListIds";
import { insertOpening, editOpening } from "../../services/index";

export default function EditOpenings() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [id, list, setId] = useListIds("openings");
  const [tittle, sinopsis, anime, num, seasion, media] = useOpening(id);

  const setabform = async (data) => {
    if (media.length == 0) return;
    console.log(data);
    insertEpisode;
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
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={handleSubmit(setabform)}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                {...register("nombre")}
                placeholder="nombre"
              />
            </div>
            <div className={styles.concret}>
              <input
                type="text"
                className={styles.input}
                placeholder="descripcion"
                {...register("descripcion")}
              />
            </div>
            <Media media={media} kind="openings" id_external={id} />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
