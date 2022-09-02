import { useForm } from "react-hook-form";
import styles from "./EditOpenings.module.css";
import Media from "@/components/Media/index";
import { useState } from "react";

export default function EditOpenings({ siglas }) {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
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
            <Media
              media={media}
              params={{
                siglas,
                kind: "openings",
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
