import React from 'react'
import 'components/Slider/Slider.css';
import 'font-awesome/css/font-awesome.min.css';

const Slider = (props) => {

  return (
    <div className="contenedor" id="contenedor">
      <div className="tarjeta">
        <div className="slider_banner">
          <div className="banner active" id='banner'>
            {props.animes.map(anime => (
              <a className="anime" href={'/AnimeDetailsid=' + anime.id} key={anime.id}>
                <article className='first'>
                  <img src={anime.src} alt={anime.titulo} />
                  <div className="titulo">
                    <h2>{anime.titulo} </h2>
                  </div>
                </article>
              </a>
            ))}
          </div>
          <div id="banner-prev" className="flecha-banner anterior" ><span className="fa fa-chevron-left"></span></div>
          <div id="banner-next" className="flecha-banner siguiente"><span className="fa fa-chevron-right"></span></div>
        </div>
      </div>
    </div>
  )
}

export default Slider;