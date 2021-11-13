import React, { useState } from 'react'
import './Slider.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.animes.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="contenedor">
      <div className="slider_banner">
        <div className="banner">
          {props.animes.map((anime, i) => (
            <Link key={i} className={current == i ? 'anime active':"anime"} to={'/AnimeDetails/' + anime.id} key={anime.id}>
              <article className='first'>
                <img src={anime.src} alt={anime.titulo} />
                <div className="titulo">
                  <h2>{anime.titulo} </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div onClick={ () => {prevSlide()} } className="flecha-banner anterior" ><span className="fa fa-chevron-left"></span></div>
        <div onClick={ () => {nextSlide()} } className="flecha-banner siguiente"><span className="fa fa-chevron-right"></span></div>
      </div>
    </div>
  )
}
export default Slider;