import React from "react";
import "components/List/List.css";
import "font-awesome/css/font-awesome.min.css";

const ListPersonages = (props) => {
  const openModal = (id) => {
    console.log(id);
  }

  return (
    <div className="tabcontent">
      {props.personages.map((anime) => (
        <div onClick={ () => { openModal(anime.id)}}>
          <div className="img">
            <img src={anime.src} alt={anime.nombre} />
          </div>
          <div className="info">
            <h3> { anime.nombre }</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListPersonages;