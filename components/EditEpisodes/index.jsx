import { useForm } from "react-hook-form";
import styles from "./EditEpisodes.module.css";
import Media from "@/components/Media/index";
import { useState } from "react";

export default function EditEpisodes({ siglas }) {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  // const { elements, setElements } = useState([]);
  const [media, setMedia] = useState([]);

  const setabform = async (data) => {
    //JSON.stringify(data);
    console.log(data);
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.contenedor_formulario}>
          <form
            className={styles.concret}
            onSubmit={handleSubmit((data) => {
              setabform(data);
            })}
          >
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
                placeholder="Sinopsis "
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
            <Media
              media={media}
              params={{
                siglas,
                kind: "episodes",
                idioma: "es",
                profile: "",
              }}
            />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
