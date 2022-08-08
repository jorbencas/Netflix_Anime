import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";
import { useParams } from "react-router-dom";

function GridVideo(props) {
  const { kind } = useParams();

  return (
    <div className="episodegrid">
      {props.elements.map((episode) => (
        <article className="grid-item" key={episode.id}>
          <img className="image" src={episode.src} alt={episode[props.field]} />
          <Link
            href={"/" + props.kind + "/" + episode.id + "/" + kind}
            className="overlay"
          >
            <i className="fa fa-play-circle"></i>
          </Link>
          <p className="data">
            {episode.num} {episode[props.field]}
          </p>
        </article>
      ))}
    </div>
  );
}

export default GridVideo;
