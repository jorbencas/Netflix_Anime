import React, { useEffect, useState } from "react";
import "components/Filters/Filters.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Communication from "services";

const Filters = (props) => {
  const [elements, setElements] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Communication.getMethod(1, `Filters`, {
      action: "getFilters",
      kind: props.kind,
    })
      .then((res) => {
        setElements(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });
    switch (props.kind) {
      case "generes":
        setHeight(329);
        break;
      case "years":
        setHeight(188);
        break;
      default:
        setHeight(45);
        break;
    }

    return () => {
      setElements(null);
      setHeight(0);
    };
  }, []);

  return (
    <ul className="list" style={{ height: height + "px" }}>
      {elements !== null
        ? elements.map((element, key) => {
            return (
              <li key={key}>
                <Link className="link" href={"Anime/" + element.filter}>
                  {element.title}
                </Link>
              </li>
            );
          })
        : null}
    </ul>
  );
};
export default Filters;
