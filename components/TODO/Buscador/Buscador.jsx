import List from "../List/List.jsx";
import { useState } from "react";
// import Communication from 'services';
import "./Buscador.module.css";

function Buscador() {
  const [searches, setSearches] = useState("");
  const [user] = useState(null);
  const [results, setResults] = useState(null);
  const [areResult, SetAreResult] = useState(false);

  const search = (e) => {
    if (searches !== e.target.value) {
      setSearches(e.target.value);
      if (searches.length > 3) {
        // Communication.getMethod(1, 'Filters',{
        //     action: 'handlesearch',
        //     search: searches,
        //     kind: 'letters',
        //     user: user,
        //     limit: '0_2'
        // }).then((res) => {
        //     // if (res.length > 0 ) {
        //     // } else {
        //     // }
        //     console.log("*******************");
        //     console.log(res);
        //     setResults(res);
        //     SetAreResult(true);
        // })
        // .catch(() => {
        //     // dispatch({
        //     //     type: 'ERROR_USERS',
        //     //     payload: null
        //     // })
        // });
      } else {
      }
      console.log(searches);
    }
  };

  return (
    <div className={styles.search_contenent}>
      <input
        type="text"
        className={styles.form - control}
        placeholder="Buscar"
        value={searches}
        onChange={search}
      />
      <div className={styles.search_icon}>
        {" "}
        <i className="fa fa-search"></i>{" "}
      </div>
      {results !== null && areResult === true ? (
        <div className={styles.lista_resultados}>
          <List animes={results} />
        </div>
      ) : null}
    </div>
  );
}

export default Buscador;
