import React, { useEffect, useState } from "react";
import "pages/AnimeDetails/AnimeDetails.css";
import "font-awesome/css/font-awesome.min.css";
import { useParams } from "react-router-dom";
import Communication from "services";
import Episodes from "components/Episodes/Episodes";
import Generes from "components/Generes/Generes";
import Endings from "components/Endings/Endings";
import Openings from "components/Openings/Openings";
import Personages from "components/Personages/Personages";
import GridSeassion from "components/Grid/GridSeassion";
// import Comments from "components/Comments";

const AnimeDetails = () => {
    const { id, kind, seasion } = useParams();
    const [ anime, setAnime ] = useState(null);
    const [ view, setView ] = useState("episodes");
    const [ user ] = useState(null);

  /*  $(document).ready(function(){
        let screenwidth = document.body.clientWidth;
        if(screenwidth <= 800){
          $("#episodes p").text("Epi");
          $("#personages p").text("Pers");
          $("#openings p").text("Op");
          $("#endings p").text("Ed");
        }
      });
      
      hrefedit(elem){
        window.location = $(elem).data('href');
      }
      
      more_less(event){
        let node = $("#sinopsis")[0];
        if ($(event).hasClass("mas")) {
          $(event).html('<i class="fas fa-plus"></i>');
          $(event).removeClass("mas").addClass("menos");
          node.textContent = node.textContent.substring(0,149) +"...";
        } else {
          $(event).html('<i class="fas fa-minus"></i>');
          $(event).removeClass("menos").addClass("mas");
          node.textContent = $(node).attr("text");
        }
      }
      
      setfavorite(fav, id, elem){
        let action = fav === "far fa-heart" ? 'addfav': 'removefav';
        api_ajax("Anime", false,{"action": action,"id":id, "user":localStorage.getItem("user")})
        .then( (data) => {
      
          if (resp['status']['code'] === 200) {
            $(elem).attr("onclick",$(elem).attr("onclick").replace(fav,resp['data']));
            $(".favorite i").removeClass(`${fav}`).addClass(`${resp['data']}`);
          } else openalert("d", resp['status']['message']);
        }).catch((error) => {
          console.log(error);
          openalert("d", error);
        });
      }
       */

    useEffect(() => {
      let s = "";
      if (seasion !== undefined) {
          s = `&seasion=${seasion}`;
      }

      Communication.getMethod(1, `Anime&ap=${id}&kind=${kind}${s}`)
      .then((res) => {
          setAnime(res);
      })
      .catch(() => {
          // dispatch({
          //     type: 'ERROR_USERS',
          //     payload: null
          // })
      });

      return () => {
          setAnime(null);
      };
    }, []);

  const renderstateclass = () => {
    let state;
    switch (anime.state) {
      case "En Emisión":
        state = "state_sucess";
        break;
      case "Pendiente":
        state = "state_warning";
        break;
      case "Finalizado":
        state = "state_danger";
        break;
      default:
        state = "state_danger";
        break;
    }
    return state;
  };

  const setfavorite = (fav) => {
    anime.favorite = !fav;
    setAnime(anime);
  };

  const renderSometing = () => {
    let starRating = [];
    for (let i = 0; i < 5; i++) {
      let star = i < anime.valorations ? "fas fa-star" : "far fa-star";
      starRating.push(star);
    }
    let startats = "";
    starRating.forEach((element ,i) => {
        startats += <span key={i}><i className={element} /></span>
    });

    let headFavorite = anime.favorite !== undefined ? "fas fa-heart" : "far fa-heart";
    return (
      <>
        <div className="serie-header_rating">
          <div className="star-rating">
            {startats}
          </div>
          <input
            type="hidden"
            className="rating-value"
            value={anime.valorations}
          />
        </div>
        <div className="favorite" onClick={ () => { setfavorite(anime.favorite, id) } }>
          <i className={headFavorite}></i>
        </div>
      </>
    );
  };

  const renderkindclass = (kind) => {
    let state = 'element_kind ';
    switch (kind) {
        case 'pelicula': state += 'pelicula'; break;
        case 'ova': state += 'ova';  break;
        default: state += 'serie';  break;
    }
    return state
}

  return (
    <>
      {anime !== null ? (
        <div>
          <div className="detail-page">
            <div className="banner">
              <div className="jumbotron">
                <img
                  className="banner_img"
                  src={anime.banner}
                  alt={anime.titulo}
                />
              </div>
            </div>
            <div className="serie-header">
              <img src={anime.src} alt={anime.titulo} />
              <section className="serie-header-data">
                <h1 className="serie-header__title">{anime.titulo}</h1>
                <section className="serie-description">
                  <article text={anime.sinopsis}> {anime.sinopsis} </article>
                </section>
                <div className="serie-header-metadata">
                  <ul className="serie-header_genero">
                    <h3>Genero:</h3>
                    { anime.generes.length > 0 ? <Generes generes={anime.generes} />  : null}
                  </ul>
                  <ul className="serie-header_genero">
                    <h3>Estado</h3>
                    <li className={renderstateclass}>{anime.state}</li>
                  </ul>
                  <div className="serie-header_fecha">
                    <i className="fa fa-calendar"> </i>
                    <span>
                      {anime.date_publication &&
                      anime.date_publication.length > 0
                        ? anime.date_publication
                        : "Sin fecha"}
                    </span>
                  </div>
                  <div className="serie-header_fecha">
                    <span>
                      -{anime.date_finalization &&
                      anime.date_finalization.length > 0
                        ? anime.date_finalization
                        : "Sin fecha"}
                    </span>
                  </div>
                  <div className="serie-header_genero">
                    <h3>Tipo </h3>
                    <li className={renderkindclass(anime.kind)}>{anime.kind}</li>
                  </div>
                  {user !== null ? renderSometing() : null}
                </div>
              </section>
            </div>
            <div className="toolbar">
              <ul className="tab">
                <button
                  className={view === "episodes" ? "tablinks active" : "tablinks"}
                  onClick={() => {
                    setView("episodes");
                  }}
                >
                  <p>Episodios ( {anime.num_epis} )</p>
                </button>
                <button
                  className={
                    view === "personages" ? "tablinks active" : "tablinks"
                  }
                  onClick={() => {
                    setView("personages");
                  }}
                >
                  <p>Personages ( {anime.num_pers} )</p>
                </button>
                <button
                  className={view === "openings" ? "tablinks active" : "tablinks"}
                  onClick={() => {
                    setView("openings");
                  }}
                >
                  <p>Openings ( {anime.num_opes} )</p>
                </button>
                <button
                  className={view === "endings" ? "tablinks active" : "tablinks"}
                  onClick={() => {
                    setView("endings");
                  }}
                >
                  <p>Endings ( {anime.num_ends} )</p>
                </button>
              </ul>
            </div>
          </div>
          <div className="tabcontent">
            { view === 'episodes' ? <Episodes id={id} /> : null }
            { view === 'personages' ? <Personages id={id} /> : null }
            { view === 'openings' ? <Openings id={id} /> : null }
            { view === 'endings' ? <Endings id={id} /> : null }
          </div>
          {
            anime !== null && anime.seasions !== null ?  
            <GridSeassion seasions={anime.seasions} src={anime.src}/>
            : null
          }
          {/* <Comments /> */}
        </div>
      ) : null}
    </>
  );
};

export default AnimeDetails;