import React from "react";
import "./Breadcrumb.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumbs-one">
        {props.breadcrumb !== null
          ? props.breadcrumb.map((bread, i) => (
              <li key={i} className="b_link">
                {props.counter === i ? (
                  <div className="elem current">{bread.name}</div>
                ) : (
                  <Link className="elem" href={bread.href}>
                    {bread.name}
                  </Link>
                )}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Breadcrumb;
