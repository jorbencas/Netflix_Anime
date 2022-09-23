import { useForm } from "react-hook-form";
import styles from "./EditEpisodes.module.css";
import Media from "@/components/Media/index";
import { useEpisode } from "@/hooks/useEpisodes";
import { useListIds } from "@/hooks/useListIfs";
import DyamondListIds from "../DyamondListIds";
import { insertEpisode, editEpisode } from "@/services/index";

export default function EditEpisodes() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const [id, list, setId] = useListIds("episodes");
  const [tittle, sinopsis, anime, num, seasion, media] = useEpisode(id);

  const setabform = async (data) => {
    //JSON.stringify(data);
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
      <DyamondListIds list={list} changeList={(id) => setId(id)} />
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form className={styles.concret} onSubmit={handleSubmit(setabform)}>
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                {...register("titulo")}
                placeholder="Titulo "
              />
            </div>
            <div className={styles.concret}>
              <input
                type="text"
                className={styles.input}
                placeholder="Sinopsis"
                {...register("sinopsis")}
              />
            </div>
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
            <Media media={media} kind="episodes" id_external={id} />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
