import React, { useState, useEffect } from "react";
import "components/Openings/Openings.css";
import "font-awesome/css/font-awesome.min.css";
import Communication from "services";
import { useParams } from "react-router-dom";
import GridVideo from "components/Grid/GridVideo";
import { Link } from "react-router-dom";

const Openings = () => {
  const { id } = useParams();
  const [openings, setOpenings] = useState(null);
  const [view, setView] = useState("list");

  useEffect(() => {
    Communication.getMethod(1, `Openings&aa=${id}`)
      .then((res) => {
        setOpenings(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });
    return () => {
      setOpenings([]);
    };
  }, []);

  const rendertable = () => {
    return (
      <table className="table">
        <tbody className="table-tbody" role="tablist">
          {openings !== null
            ? openings.map((episode) => (
                <Link href={"/OpeningsDetails/ " + episode.id}>
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
      {openings !== null && view === "table" ? rendertable() : null}
      {openings !== null && view === "list" ? (
        <GridVideo elements={openings} kind="openings" field="nombre" />
      ) : null}
    </>
  );
};

export default Openings;
