import EditAnime from "../../components/Edit/EditAnime.jsx";
import Steeps from "../../components/Edit/Steeps.jsx";
// import { Link, useRoute } from "next/router";
import { useRouter } from "next/router";
import ToolbarEdit from "../../components/Edit/ToolBarEdit.jsx";
import styles from "./Edit.module.css";

const Edit = () => {
  const href = useRouter();
  const { siglas } = href.query;
  return (
    <>
      {typeof siglas !== "undefined" ? <ToolbarEdit /> : <Steeps />}
      <div id="anime" className="tabcontent" style={{ display: "block" }}>
        <EditAnime />
      </div>
    </>
  );
};
export default Edit;
