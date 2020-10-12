import React from 'react'
import axios from 'axios';
import AnimeGrid from '../components/AnimeGrid';
import Slider from '../components/Slider';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/pages/Home.css';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            sliders: [],
            episodes: []
        };
    }

    let filt = JSON.parse(filters);
let genere = {};
let searchable = true;

$(window).scroll(function() {
  var target = document.getElementById("generes_final"),
    windowHeight = $(window).height();

  if ( searchable && inView(target) && windowHeight > getViewportOffset(target)) {
    viewloading();
    //Obtenemos el elemnto que esta disponible para buscar
    filt.forEach((f, i) => {
      if (f.avable == true) {
        genere["e"] = f;
        genere["i"] = i;
      }
    });

    if (genere.hasOwnProperty("e") && genere["e"].avable === true) {
      let next = genere["i"] + 1;
      if (next < filt.length) {
        if ($(".generes .container-loading").length > 1) {
          $(".generes .container-loading").remove();
          viewloading();
        }

        api_ajax(`Filters&aa=generes_${genere["e"]["filter"]}&p=0_11`).then((resp) => {
          if (resp["status"]["code"] == 200) {
            filt[genere["i"]].avable = false;
            filt[next].avable = true;
            $("#generes_final").remove();
            $(".generes .container-loading ").remove();
            $(".generes").append(
              `<div class='home_slide_banner'><h3>${genere["e"].filter}</h3> <a class='link' href='http://cosasdeanime.com?r=es/Anime&f=generes_${genere["e"].filter}'>Ver mas + </p></div>`
            );
            resp["data"].forEach(anime => {
              $(".generes").append(`<a href="http://cosasdeanime.com?r=es/AnimeDetails&id=${anime["id"]}")}" class="grid-anime">
                                  <div class="element_img" style='background:url("${anime["src"]}");background-repeat: no-repeat; background-size: cover;'></div>
                                  <div class="${anime["nuevo"]}">Nuevo</div>
                                  <div class="element_kind ${anime["kind_class"]}">${anime["kind"]}</div>
                                  <div class="element_text">
                                      <p class='titulo'>${anime["titulo_es"]}</p>
                                      <p> ${anime["sinopsis_es"]}</p>
                                  </div>
                              </a>`);
            });
            $(".generes").append("<div id='generes_final'></div>");
          }else{
            filt[next].avable = true;
          }
          genere = {};
        }).catch((error) => {
          console.log(error);
        });

      } else {
        searchable = false;
        $(".generes .container-loading ").remove();
        $("#generes_final").remove();

        let user =  $("#user").text().length > 0 ? $("#user").text() : null;
        if(user !== null){
          let response = {"action":"mysearches", "user":user};
          api_ajax( "Buscador", false, response ).then((resp) => {
            if (resp["status"]["code"] == 200) {
              $("#generes_final").remove();
              $(".generes .container-loading ").remove();
              $(".generes").append(
                `<div class='home_slide_banner'><h3>Animes interesanted </h3> </div>`
              );
              resp["data"].forEach(anime => {
                $(".generes").append(`<a href="http://cosasdeanime.com?r=es/AnimeDetails&id=${anime["id"]}")}" class="grid-anime">
                                    <div class="element_img" style='background:url("${anime["src"]}");background-repeat: no-repeat; background-size: cover;'></div>
                                    <div class="${anime["nuevo"]}">Nuevo</div>
                                    <div class="element_kind ${anime["kind_class"]}">${anime["kind"]}</div>
                                    <div class="element_text">
                                        <p class='titulo'>${anime["titulo_es"]}</p>
                                        <p> ${anime["sinopsis_es"]}</p>
                                    </div>
                                </a>`);
              });
              $(".generes").append("<div id='generes_final'></div>");
              rendertext()//funciñon cargada en el js del modulo Anime
            }
          }).catch((error) => {
            console.log(error);
          });
        }
      }
    }
  }
});

function viewloading() {
  $(".content-loader .container-loading ").clone().appendTo($(".generes"));
  $(" .generes .content-loader .container-loading ").show();
  $(" .generes .container-loading").css("margin", "auto");
  $(" .generes .container-loading").css("background", "transparent");
}

function getViewportOffset(element) {
  var scrollTop = $(window).scrollTop(),
    offset = $(element).offset();
  return offset.top - scrollTop;
}

function inView(element, fullHeightInView) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(element).offset().top;
  var elemBottom;

  if (fullHeightInView) {
    elemBottom = elemTop + $(element).height();
  } else {
    elemBottom = elemTop;
  }

  return (
    elemBottom >= docViewTop &&
    elemTop <= docViewBottom &&
    elemBottom <= docViewBottom &&
    elemTop >= docViewTop
  );
}



    componentDidMount() {
        axios.get(`http://localhost:3001/animes/as/0_11`)
            .then(res => {
                this.setState({ sliders: res.data.data });
            });

        axios.get(`http://localhost:3001/episodes/as/0_9`)
            .then(res => {
                this.setState({ episodes: res.data.data });
            });

        axios.get(`http://localhost:3001/animes/lastanimes`)
            .then(res => {
                this.setState({ animes: res.data.data });
            });

        /*axios.get(`http://localhost:3001/Animes`)
        .then(res => {
        this.setState({animes:res.data.data});
        }); */

        /*   $data = api('Filters&aq=getFilters');
          $filters = $data['status']['code'] == 200 ? $data['data'] : null;
        
          $v['generes'] = "<!-- -->";
          $filters['generes'][0]['avable'] = true;
          $value = $filters['generes'][0]['filter'];
          "Filters&aa=generes_{$value}&p=0_9";
       */
    }

    render() {
        return (
            <div>
                <div id="home">
                    <div className="slider">
                        <Slider animes={this.state.sliders} />
                    </div>
                    <div className="lista_proximas">
                        <h3>Proximos Estrenos</h3>
                        <ul>
                            {this.state.episodes.map((episode) => (
                                <li className="lista" key={episode.id}>
                                    <a className="texto_line" href={"EpisodesDetail/&id=" + episode.id}>
                                        <div className="img" style={{
                                            backgroundImage: "url(" + episode.src + ")",
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                        ></div>
                                        <p className="texto">
                                            {episode.anime_titulo_es} -
                                            {episode.titulo_es}
                                            <i className="fa fa-play"></i>
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="home_body">
                    <div className="home_body_content">
                        {/*     <?php if (isLogged()) : ?>
      <?php if (!empty($v['animes'])): ?>
        <h3>Mis Animes</h3>
        <?=render("Anime_Grid", $v['animes'])?>
      <?php endif;?>
    <?php else :?> */}

                        <h3>Listado de animes de la temporada</h3>
                        <AnimeGrid animes={this.state.animes} />
                    </div>
                    <div className="home_body_content generes">

                        {/*   <div className='home_slide_banner'><h3>$value</h3> <a className='link' href='". hrefMake("{$v['lang']}/Anime&f=generes_$value") ."'>Ver mas + </p></div>";
   <AnimeGrid animes={this.state.animes} />
    <div id='generes_final'></div>
  </div> */}
                    </div>
                    {/* <div className="div" style='display:none;'><?= $v['filters'] ?></div>
 */} <a href="http://www.contadorvisitasgratis.com" target="_Blank" rel="noopener noreferrer"></a><br />
                    <script type="text/javascript" src="http://counter2.fcs.ovh/private/countertab.js?c=928439c3c54d65c5411de22048a97cbe"></script>
                </div>
        </div>
        )
    }
}

export default Home;
