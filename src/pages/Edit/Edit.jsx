import EditAnime from "../../components/Edit/EditAnime.jsx";
import Steeps from "../../components/Edit/Steeps.jsx";
import "./Edit.css";
import { Link, useRoute } from "wouter";

const Edit = () => {
  const [match, params] = useRoute();
  console.log(match);
  console.log(params);
  console.log("params.id", params.id);
  let siglas = params.siglas;
  return (
    <>
      {typeof siglas !== "undefined" ? <ToolBarEdit /> : <Steeps />}
      <div id="anime" class="tabcontent" style="display:block;">
        <EditAnime />
      </div>
      {/* <div id="episodes" class="tabcontent" style="display:none;">
        <EditEpisodes />
      </div>
      <div id="openings" class="tabcontent" style="display:none;">
        <EditOpenings />
      </div>
      <div id="endings" class="tabcontent" style="display:none;">
        <EditEndings />
      </div>
      <div id="all" class="tabcontent all" style="display:none;">
        <Link href={"/Anime/" + siglas} class="link detail">
          Ver
        </Link>
        <Link href={"/Edit/" + siglas} class="link edit">
          Editar
        </Link>
      </div> */}
    </>
  );
};
export default Edit;
