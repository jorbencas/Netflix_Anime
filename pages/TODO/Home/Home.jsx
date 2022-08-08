import Grid from "@/components/Grid/Grid.jsx";
import Slider from "@/components/Slider/Slider.jsx";
// import "font-awesome/css/font-awesome.min.css";
import "./Home.module.css";
// import Communication from "services";
import { Link } from "next/router";
import Loading from "@/components/Loading/Loading";
import { Component } from "react";

export class Home extends Component {
  state = {
    animes: null,
    sliders: null,
    episodes: null,
  };

  render() {
    return (
      <>
        <div id="home">
          <div className="slider">
            {this.state.sliders ? (
              <Slider animes={this.state.sliders} />
            ) : (
              <Loading />
            )}
          </div>
          <div className="lista_proximas">
            <h3>Proximos Estrenos</h3>
            <ul>
              {this.state.episodes ? (
                this.state.episodes.map((episode) => (
                  <li className="lista" key={episode.id}>
                    <Link
                      className="texto_line"
                      href={"EpisodesDetail/&id=" + episode.id}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(" + episode.src + ")",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <p className="texto">
                        {episode.anime_titulo} -{episode.epititulo}
                        <i className="fa fa-play"></i>
                      </p>
                    </Link>
                  </li>
                ))
              ) : (
                <Loading />
              )}
            </ul>
          </div>
        </div>
        <div className="home_body">
          <div className="home_body_content">
            {/*     if (isLogged()) : ?>
                            if (!empty($v['animes'])): ?>
                              <h3>Mis Animes</h3>
                              <?=render("Anime_Grid", $v['animes'])?>
                            endif;?>
                          else :?> */}
            <h3>Listado de animes de la temporada</h3>
            {this.state.animes ? (
              <Grid animes={this.state.animes} />
            ) : (
              <Loading />
            )}
          </div>
          <div className="home_body_content generes">
            {/*   <div className='home_slide_banner'><h3>$value</h3> <a className='link' href='". hrefMake("{$v['lang']}/Anime&f=generes_$value") ."'>Ver mas + </p></div>";
                      <Grid animes={this.state.animes} />
                        <div id='generes_final'></div>
                      </div> */}
          </div>
          {/* <div className="div" style='display:none;'><?= $v['filters'] ?></div>*/}
          {/* <a href="http://www.contadorvisitasgratis.com" target="_Blank" rel="noopener noreferrer"></a><br />
                    <script type="text/javascript" src="http://counter2.fcs.ovh/private/countertab.js?c=928439c3c54d65c5411de22048a97cbe"></script> */}
        </div>
      </>
    );
  }
}

export default Home;
