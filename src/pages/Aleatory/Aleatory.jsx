import React, { useEffect, useReducer, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Communication from "services";
import "./Aleatory.css";
import "font-awesome/css/font-awesome.min.css";
// import Comments from "components/TODO/Comments";
import BreadCrumb from "components/Breadcrumb/Breadcrumb";
import Video from "components/Video/Video";
import Grid from "components/Grid/Grid";
import Loading from "components/Loading/Loading";

const Aleatory = () => {
  const location = useLocation();
  const { id, kind, seasion } = useParams();
  const [elements, setElements] = useState(null);
  const [field, setField] = useState("epititulo");
  const [user, setUser] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState(null);
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    let s = "";
    let k = "";
    let urlseasion = "";
    let urlKind = "";

    if (seasion !== undefined) {
      s = `&seasion=${seasion}`;
      urlseasion = "/" + seasion;
    }

    if (kind !== undefined) {
      k = `&kind=${kind}`;
      urlKind = "/" + kind;
    }

    let ruta = location.pathname;
    let basePath = "Episodes";
    let preTexto = "Capitulo ";
    if (ruta.includes("openings")) {
      basePath = "Openings";
      setField("nombre");
      preTexto = "Opening ";
    } else if (ruta.includes("endings")) {
      basePath = "Endings";
      setField("nombre");
      preTexto = "Ending ";
    }

    Communication.getMethod(1, `${basePath}&ap=${id}${k}${s}`)
      .then((res) => {
        setElements(res);
        let bread = [
          {
            name: "Anime",
            href: "/Anime",
          },
        ];
        bread.push({
          name: res.anime_titulo !== undefined ? res.anime_titulo : res.titulo,
          href: "/AnimeDetails/" + res.anime + urlKind,
        });
        if (res.seasions !== undefined) {
          urlseasion = "/" + res.id_external;
          bread.push({
            name: "Temporada " + res.seasions,
            href: "/AnimeDetails/" + res.anime + urlKind + urlseasion,
          });
        }
        bread.push({
          name: preTexto + res + res[field],
          href: "/aleatory/" + res.id + urlKind + urlseasion,
        });
        setBreadcrumb(bread);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });

    Communication.getMethod(1, `Anime&as=0_7&oa=created`)
      .then((res) => {
        setAnimes(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });

    return () => {
      setElements(null);
      setAnimes(null);
    };
  }, []);

  const makeUrl = (nextId) => {
    let ruta = location.pathname;
    return ruta.replace(id, nextId);
  };

  return (
    <>
      {elements !== null ? (
        <section className="episode-page">
          {breadcrumb !== null ? (
            <BreadCrumb
              breadcrumb={breadcrumb}
              counter={breadcrumb.length - 1}
            />
          ) : null}
          <div className="element video">
            <div className="element_title">
              <h1>
                {elements.num} - {elements[field]}
              </h1>
            </div>
            <div className="element_video">
              <Video video={elements.src} poster={elements.poster} />
            </div>
            <div className="options">
              <ul className="options">
                {elements.prev !== null ? (
                  <Link
                    className="first-child option"
                    to={makeUrl(elements.prev)}
                  >
                    <i className="fa fa-caret-left"></i>Anterior
                  </Link>
                ) : null}
                {elements.next !== null ? (
                  <Link
                    className="first-child option"
                    to={makeUrl(elements.next)}
                  >
                    Siguiente <i className="fa fa-caret-left"></i>
                  </Link>
                ) : null}
              </ul>
            </div>
          </div>

          {user ? (
            <div className="element">
              <div className="options">
                <div className="option">
                  <p>Audio: </p>
                  <select
                    name="episode_languaje"
                    id="selector episode"
                    onchange="setlang()"
                  >
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                    <option value="va">Valencia</option>
                  </select>
                </div>
                <div className="option">
                  <p>Subtitulos: </p>
                  <select name="episode_sub" id="selector episode">
                    <option value="si">Si</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="option actions">
                  <button className="submit" id="remove">
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    name="cant"
                    id="cant"
                    min="0"
                    max="100"
                    value="0"
                  />
                  <button className="submit" id="add">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="option actions">
                  <button className="submit" type="submit">
                    <i className="fas fa-shopping-cart"></i> Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {/*<Collections id={id} />
                     endif; ?> 
          <Comments idElement={id} />*/}

          {animes !== null ? (
            <section className="animes_intereseted">
              <h3>Animes que pueden interesarte</h3>
              <Grid animes={animes} />
            </section>
          ) : (
            <Loading />
          )}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Aleatory;
