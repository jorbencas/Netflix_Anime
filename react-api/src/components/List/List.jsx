import React from "react";
import "components/List/List.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Generes from "components/Generes/Generes";

const List = (props) => {
  return (
    <div className="tabcontent">
      {props.animes.map((anime) => (
        <Link to={'/AnimeDetails/'+anime.id+'/'+anime.kind} className="animes_element" key={anime.id}>
          <div className="img">
            <img src={anime.src} alt={anime.titulo} />
          </div>
          <div className="info">
            <h3>{anime.titulo}</h3>
            <p>{anime.sinopsis}</p>
            {anime.genere !== undefined && anime.generes.length > 0 ? <Generes generes={anime.generes} /> : null} 
          </div>
      </Link>
      ))}
    </div>
  );
};
export default List;