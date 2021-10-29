import React from "react";

const Generes = (props) => {
    return (
        <ul>
            {
            props.generes.map((element, i) => (
                <li key={i} className='' > {element.title} </li>
            ))
            }
        </ul>
    );
};
export default Generes;