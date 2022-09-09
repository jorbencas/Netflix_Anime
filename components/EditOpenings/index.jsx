import { useForm } from "react-hook-form";
import styles from "./EditOpenings.module.css";
import Media from "@/components/Media/index";
import { useContext, useState } from "react";
import { SiglasContext } from "@/context/SiglasContext";
import { useOpening } from "@/hooks/useOpenings";

export default function EditOpenings() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const { id, list, setList } = useListIds("openings");
  const [tittle, sinopsis, anime, num, seasion, media] = useOpening(id);

  const setabform = async (data) => {
    //JSON.stringify(data);
    console.log(data);
  };

  return (
    <>
      <DyamondListIds list={list} changeList={(id) => setList(id)} />
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
            <Media media={media} kind="openings" />
            <input className={styles.input} type="submit" value="Crear" />
          </form>
        </div>
      </div>
    </>
  );
}
