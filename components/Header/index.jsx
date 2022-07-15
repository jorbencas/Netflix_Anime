import { useState } from "react";
// import Communication from "services/index";
// import 'font-awesome/css/font-awesome.min.css';
import styles from "./Header.module.css";
// import Langs from "components/Langs/Langs.jsx";
import { useRouter } from "next/router";
import Link from "next/link";
// import FiltersContainer from "components/Filters/FiltersContainer";
// import Buscador from "components/Buscador/Buscador";
// import SwitchButton from "components/SwitchButton/SwitchButton";

const Header = () => {
  // const [langVisible, setLangVisible] = useState(false);
  const [random, setRandom] = useState(0);
  const [kind, setKind] = useState("");
  // const [user, setUser] = useState("");
  // const [numProducts, setNumProducts] = useState(0);
  // const [urlAuth, setUrlAuth] = useState("");
  const href = useRouter();

  // useEffect(() => {
  // Communication.getMethod(1, `Episodes&aq=getidrand`)
  //   .then((res) => {
  //     setRandom(res.id);
  //     setKind(res.kind);
  //   })
  //   .catch(() => {
  //     console.log("error");
  //   });
  // return () => {
  //     cleanup
  // }
  // }, []);

  // const LogIn = (menu) => {
  //   if (menu === "movil") {
  //     return (
  //       <>
  //         <Link className="link cart" href="/Cart">
  //           <span className="badge">{numProducts}</span>
  //           <i className="fas fa-shopping-cart"></i>
  //         </Link>
  //         <Link className="link" id="salir">
  //           <i className="fas fa-sign-out-alt"></i>{" "}
  //           <span className="texto">salir</span>
  //         </Link>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <li className="list_element movil_disabled">
  //           <Link className="link user" href="/User">
  //             <img src=" $avatar " alt=" $usuario " />
  //             <span className="texto">{user}</span>
  //           </Link>
  //         </li>
  //         <li className="list_element movil_disabled">
  //           <Link className="link" id="salir" href="">
  //             <i className="fas fa-sign-out-alt"></i>
  //             <span className="texto">Salir</span>
  //           </Link>
  //         </li>
  //         <li className="list_element movil_disabled">
  //           <Link className="link" href="/Cart">
  //             <span className="badge movil_disabled"> {numProducts}</span>
  //             <i className="fas fa-shopping-cart"></i>
  //           </Link>
  //         </li>
  //       </>
  //     );
  //   }
  // };

  const linkActive = (page) => {
    // const [isActive] = useRoute(props.href);
    // return isActive ? "active" : "";
    return /*href.query.includes(page) ?*/ " active" /*: ""*/;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_element}>
            <Link href="/edit">
              <a className={styles.link + styles[linkActive("/edit")]}>Edit</a>
            </Link>
          </li>
          <li className={styles.list_element}>
            <Link href="/">
              <a className={styles.link + styles[linkActive("/")]}>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  // return (
  //   <div className="header">
  //     {/* <SwitchButton />
  //     {langVisible ? <Langs /> : null} */}
  //     {/* <div className="menu_bar">
  //       <Link className="link" href="/Login">
  //         <i className="fas fa-user-circle"></i>
  //         <span className="texto">iniciar_sesion</span>
  //       </Link>
  //       <Link className="link" href="/Register">
  //         <i className="fas fa-user"></i>
  //         <span className="texto">registro</span>
  //       </Link>
  //       <Link className="link user" href="/User">
  //         <img src="avatar" alt="usuario" />
  //         <span className="texto">usuario</span>
  //       </Link>
  //       {user !== "" ? LogIn("movil") : null}
  //     </div> */}
  //     <nav className="nav">
  //       <ul className="list">
  //         <li className={"list_element">
  //           <Link className="link" href="/">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">Home</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/about">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">What is Wouter</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/faq">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">FAQ</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/info">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">More Info (redirect)</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/edit">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">Edit</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/edit">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">Edit</span>
  //           </Link>
  //         </li>
  //         <li className={"list_element">
  //           <Link className="link" href="/edit">
  //             <i className="fa fa-home"></i>
  //             <span className="texto">Edit</span>
  //           </Link>
  //         </li>

  //         <li className={"list_element" + linkActive("Anime, AnimeDetails")}>
  //           <Link className="link" href="/Anime">
  //             <i className="fa fa-list-ul"></i>
  //             <span className="texto">Animes</span>
  //             {/* if (isLogged()) $v['menu'] .= " <!--<span className='badge movil_disabled'>3</span>--> "; */}
  //           </Link>
  //         </li>
  //         <li className={"list_element" + linkActive("blog")}>
  //           <Link className="link" href="/blog">
  //             <i className="fa fa-blog"></i>
  //             <span className="texto">Blog</span>
  //             {/* if ($v['islogged']) $v['menu'] .= " <span className='badge movil_disabled'>3</span> "; */}
  //           </Link>
  //         </li>
  //         <li
  //           className={
  //             "list_element movil_disabled" + linkActive("signin, signup")
  //           }
  //         >
  //           <Link className="link" href="/signin">
  //             <i className="fa fa-user-circle"></i>
  //             <span className="texto">Iniciar Sessión / Registro </span>
  //           </Link>
  //         </li>
  //         {/* {user !== "" ? LogIn : null} */}
  //         <li
  //           className={
  //             "list_element" +
  //             linkActive("aleatory, endings, episodes, openings")
  //           }
  //         >
  //           <Link className="link" href={"/aleatory/" + random + "/" + kind}>
  //             <i className="fa fa-random"></i>
  //             <span className="texto">Aleatorio</span>
  //           </Link>
  //         </li>
  //         {/* <Buscador /> */}
  //         {/* <li className="list_element">
  //           <div
  //             className="link"
  //             onClick={() => {
  //               setLangVisible(!langVisible);
  //             }}
  //           >
  //             <i className="fa fa-language"></i>
  //             <span className="texto">Idiomas</span>
  //           </div>
  //         </li> */}
  //       </ul>
  //     </nav>
  //     {/* <FiltersContainer /> */}
  //   </div>
  // );
};
export default Header;
