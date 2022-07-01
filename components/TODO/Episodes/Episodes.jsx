import React, { useState, useEffect } from "react";
import "components/Episodes/Episodes.css";
import "font-awesome/css/font-awesome.min.css";
import Communication from "services";
import { useParams } from "react-router-dom";
import GridVideo from "components/Grid/GridVideo";
import { Link } from "react-router-dom";

const Episodes = () => {
  const { id, kind, seasion } = useParams();
  const [episodes, setEpisodes] = useState(null);
  const [view, setView] = useState("list");

  useEffect(() => {
    let s = "";
    if (seasion !== undefined) {
      s = `&seasion=${seasion}`;
    }

    Communication.getMethod(1, `Episodes&aa=${id}&kind=${kind}${s}`)
      .then((res) => {
        setEpisodes(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });
    return () => {
      setEpisodes([]);
    };
  }, []);

  const rendertable = () => {
    return (
      <table className="table">
        <tbody className="table-tbody" role="tablist">
          {episodes !== null
            ? episodes.map((episode) => (
                <Link href={"/EpisodesDetails/ " + episode.id}>
                  <tr
                    role="row"
                    className="tbody-row"
                    onclick="hrefedit(this)"
                    key={episode.id}
                  >
                    <td role="cell" className="tbody-cell">
                      <i className="fa fa-play"></i>
                    </td>
                    <td role="cell" className="tbody-cell">
                      {" "}
                      {episode.num}{" "}
                    </td>
                    <td role="cell" className="tbody-cell">
                      {" "}
                      {episode.titulo_es}{" "}
                    </td>
                  </tr>
                </Link>
              ))
            : null}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {episodes !== null && view === "table" ? rendertable() : null}
      {episodes !== null && view === "list" ? (
        <GridVideo elements={episodes} kind="episodes" field="epititulo" />
      ) : null}
    </>
  );
};

export default Episodes;
