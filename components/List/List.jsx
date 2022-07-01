import "List.module.css";
// import "font-awesome/css/font-awesome.min.css";
import { Link } from "wouter";
import Generes from "../TODO/Generes/Generes.jsx";

const List = (props) => {
  return (
    <div className="tabcontent">
      {props.animes.map((anime) => (
        <Link
          href={"/AnimeDetails/" + anime.id + "/" + anime.kind}
          className="animes_element"
          key={anime.id}
        >
          <div className="img">
            <img src={anime.src} alt={anime.titulo} />
          </div>
          <div className="info">
            <h3>{anime.titulo}</h3>
            <p>{anime.sinopsis}</p>
            {anime.genere !== undefined && anime.generes.length > 0 ? (
              <Generes generes={anime.generes} />
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default List;
