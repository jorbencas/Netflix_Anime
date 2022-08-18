import { useForm } from "react-hook-form";
import styles from "./EditAnime.module.css";
import Modal from "@/components/Modal";

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
            {/* <Generes generes={generes} /> */}
            <Modal btnLabel="Añadir generos">
              <AddGeneres />
            </Modal>
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}

export const AddGeneres = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: "",
      codigo: "",
    },
    shouldUseNativeValidation: true,
  });

  const setabform = async (data) => {
    //JSON.stringify(data);
    console.log(data);
  };

  return (
    <form
      className={styles.concret}
      onSubmit={handleSubmit(() => {
        setabform();
      })}
    >
      <input
        type="text"
        className={styles.input}
        placeholder="Codigo del genero"
        {...register("codigo")}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="Titulo del genero"
        {...register("temporadas")}
      />
      <input className={styles.input} type="submit" value="Crear" />
    </form>
  );
};
