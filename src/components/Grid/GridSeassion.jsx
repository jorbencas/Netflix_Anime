import React from 'react';
import './Grid.css';
import './GridSeassion.css';
import 'font-awesome/css/font-awesome.min.css';
import { useLocation, Link } from "react-router-dom";

const GridSeassion = (props) => {
    const location = useLocation();
    const makeUrl = (seassion) => {
        let ruta = location.pathname;
        return ruta+'/'+seassion;
    }

    return (
        <div className="seasions">
            <h3 className="title">Temporadas</h3>
            <div className="tabcontent">
                {
                    props.seasions.map((seasion, i) => (
                        <article className="grid-anime" key={i}>
                            <img className="element_img lazy" src={props.src} alt={seasion.title} />
                            <div className="element_kind temporada">Temporada</div>
                            <Link to={makeUrl(seasion.id)}
                                className="overplay">
                                <i className="fa fa-play-circle"></i>
                            </Link>
                            <p className="element_text">{seasion.title}</p>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}
export default GridSeassion;