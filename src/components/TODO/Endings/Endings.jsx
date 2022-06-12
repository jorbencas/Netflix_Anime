import React, { useState, useEffect } from "react";
import "components/Endings/Endings.css";
import "font-awesome/css/font-awesome.min.css";
import Communication from "services";
import { useParams } from "react-router-dom";
import GridVideo from "components/Grid/GridVideo";
import { Link } from "react-router-dom";

const Endings = () => {
  const { id } = useParams();
  const [endings, setEndings] = useState(null);
  const [view, setView] = useState("list");

  useEffect(() => {
    Communication.getMethod(1, `Endings&aa=${id}`)
      .then((res) => {
        setEndings(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });
    return () => {
      setEndings([]);
    };
  }, []);

  const rendertable = () => {
    return (
      <table className="table">
        <tbody className="table-tbody" role="tablist">
          {endings !== null
            ? endings.map((episode) => (
                <Link href={"/EndingsDetails/ " + episode.id}>
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
      {endings !== null && view === "table" ? rendertable() : null}
      {endings !== null && view === "list" ? (
        <GridVideo elements={endings} kind="endings" field="nombre" />
      ) : null}
    </>
  );
};

export default Endings;
