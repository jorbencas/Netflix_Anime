import React, { useCallback, useEffect, useState } from "react";
import Filters from "components/Filters/Filters";
import { Link } from "react-router-dom";
import Communication from "services";
import Loading from "components/Loading/Loading";
import "components/Filters/Filters.css";

const FiltersContainer = () => {
  const [filterVisible, setFilterVisible] = useState("");
  const [letters, setLetters] = useState(null);
  const [filters] = useState([
    { title: "genere", kind: "generes" },
    { title: "type", kind: "kind" },
    { title: "year", kind: "years" },
    { title: "lang", kind: "lang" },
    { title: "temporada", kind: "temporadas" },
  ]);

  useEffect(() => {
    Communication.getMethod(1, `Filters`, {
      action: "getFilters",
      kind: "letters",
    })
      .then((res) => {
        setLetters(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });

    return () => {
      setLetters(null);
    };
  }, []);

  const handleFilters = useCallback(
    (filter) => {
      if (filterVisible === filter) {
        setFilterVisible("");
      } else {
        setFilterVisible("");
        setFilterVisible(filter);
      }
    },
    [filterVisible]
  );

  return (
    <div className="filters">
      <ul className="menu" role="menu">
        {letters !== null ? (
          letters.map((filter, key) => {
            return (
              <li key={key}>
                <Link
                  className="link"
                  role="menuitem"
                  href={"Anime/" + filter.filter}
                >
                  {filter.title}
                </Link>
              </li>
            );
          })
        ) : (
          <Loading />
        )}

        {filters.map((filter, key) => {
          return (
            <li
              key={key}
              className="letra-link"
              onClick={() => {
                handleFilters(filter.kind);
              }}
              title={filter.title}
            >
              <div className="link" role="button">
                {filter.title}
              </div>
            </li>
          );
        })}
      </ul>
      {filterVisible !== "" ? <Filters kind={filterVisible} /> : null}
    </div>
  );
};
export default FiltersContainer;
