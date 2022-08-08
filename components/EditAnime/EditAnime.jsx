import { useForm } from "react-hook-form";
import styles from "./EditAnime.module.css";
export default function EditAnime() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: "",
      sinopsis: "",
      date_publication: "",
      date_finalization: "",
      temporadas: [],
      generos: [],
      validations: 0,
      state: "",
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
            className={styles.formulario}
            onSubmit={handleSubmit(() => {
              setabform();
            })}
          >
            <div className={styles.concret}>
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
            <input className={styles.input} type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
