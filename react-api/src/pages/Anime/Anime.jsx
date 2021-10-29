import React, { useEffect, useState } from "react";
import "./Anime.css";
import "font-awesome/css/font-awesome.min.css";
import Grid from "components/Grid/Grid";
import Communication from "services";
// import AnimeList from 'components/AnimeList';
// import AnimeTable from 'components/AnimeTable';
// import Loading from "components/Loading/Loading";
import { Link } from "react-router-dom";
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import List from "components/List/List";

const Anime = () => {
  // const history = useHistory();
  // const params = useParams();
  // console.log("*******************");
  // console.log(history);
  // console.log("*******************");
  // console.log(params);
  // console.log("                    ");
  const [animes, setAnimes] = useState(null);
  const [view, setView] = useState("grid");

  /*   function sliderpages(e,option){
        e.preventDefault();
        let id_last = $(".paginator .avable").last().attr("id");
        let id_first = $(".paginator .avable").first().attr("id");
        if(parseInt(id_last) - parseInt(id_first) === 9 ){
          if (option  == 'prev') {
            $(".paginator li[id='" + parseInt(id_first) - 1 + "']").addClass("avable");
            $(".paginator li[id='" + id_last + "']").removeClass("avable");
          } else if (option  == 'next') {
            $(".paginator li[id='" + parseInt(id_last) + 1 + "']").addClass("avable");
            $(".paginator li[id='" + id_first + "']").removeClass("avable");
          }
        }
      } */

  useEffect(() => {
    Communication.getMethod(1, `Anime&as=0_8`)
      .then((res) => {
        setAnimes(res);
      })
      .catch(() => {
        // dispatch({
        //     type: 'ERROR_USERS',
        //     payload: null
        // })
      });

    return () => {
      setAnimes(null);
    };
  }, []);

  return (
    <div className="listanime-page" id="listado_anime">
      <div className="toolbar">
        <h4> </h4>
        <ul className="tab">
          <Link to="/Anime/od=id" className="tablinks">
            {" "}
            <i className="fa fa-sort-down"></i>{" "}
          </Link>
          <Link to="/Anime/oa=id" className="tablinks">
            {" "}
            <i className="fa fa-sort-up"></i>{" "}
          </Link>
          <button
            className={"tablinks" + view === "grid" ? " active" : ""}
            onClick={() => {
              setView("list");
            }}
          >
            {" "}
            <i className="fa fa-th"></i>
          </button>
          <button
            className={"tablinks" + view === "list" ? " active" : ""}
            onClick={() => {
              setView("grid");
            }}
          >
            {" "}
            <i className="fa fa-bars"></i>
          </button>
        </ul>
      </div>
      {animes !== null && view === "grid" ? <Grid animes={animes} /> : null}
      {animes !== null && view === "list" ? <List animes={animes} /> : null}
      {/*animes !== null && view == "table" ? <AnimeTable animes={animes} /> : null} */}
    </div>
  );
};
export default Anime;
