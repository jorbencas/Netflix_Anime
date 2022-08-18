import { useForm } from "react-hook-form";
import styles from "./EditEpisodes.module.css";

export default function EditEpisodes() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: "",
      sinopsis: ""
    },
    shouldUseNativeValidation: true,
  });

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
            onSubmit={handleSubmit(() => {
              setabform();
            })}
          >
            <div className={styles.contenedor_inputs}>
              <input
                type="text"
                className={styles.input}
                onchange="inputchanges(event.target)"
                {...register("titulo")}
                placeholder="Titulo Español"
              />
            </div>
            <div className={styles.concret}>
              <input
                type="text"
                className={styles.input}
                onchange="inputchanges(event.target)"
                placeholder="Sinopsis Español"
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
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
