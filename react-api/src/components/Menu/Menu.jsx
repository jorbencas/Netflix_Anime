import React from "react";

const Menu = (props) => {

  // LogIn(){
  //   if (isLogged()) {
  //     return (
  //     <li className='list_element movil_disabled ". link_active("User") ."'><Link className='link user' to='/User'>
  //             <img  src=' $avatar ' alt=' $usuario '>
  //             <span className='texto'>{props.user}</span>
  //         </Link></li>
  //     <li className='list_element movil_disabled'><Link className='link' id='salir' to='' >
  //             <i className='fas fa-sign-out-alt'></i> <span className='texto'>Salir</span>
  //         </Link></li>
  //     <li className='list_element movil_disabled ". link_active("Cart") ."'><Link className='link' to='/Cart'>
  //         <span className='badge movil_disabled'> $number_products</span>
  //             <i className='fas fa-shopping-cart'></i></Link>
  //     </li>
  //     };
  //   );
  // }

  // LogOut(){
  //   return (
      
  //   );
  // }


  return (
    <nav id="navbar">
      <ul className="list">
        <li className='list_element ". link_active("Home") ."'>
          <a className="link" href="/Home">
            <i className="fa fa-home"></i>
            <span className="texto">Inicio</span>
          </a>
        </li>
        <li className='list_element ". link_active("Anime, AnimeDetails, EpisodesDetails") ."'>
          <a className="link" href="/Anime">
            <i className="fa fa-list-ul"></i>
            <span className="texto">Lista de Animes</span>
            {/* if (isLogged()) $v['menu'] .= " <!--<span className='badge movil_disabled'>3</span>--> "; */}
          </a>
        </li>

        <li className='list_element movil_disabled ". link_active("Auth") ."'>
          <a className="link" href="/Auth">
            <i className="fa fa-user-circle"></i>
            <span className="texto">Iniciar Sessión / Registro </span>
          </a>
        </li>

        {/* {this.LogIn} */}

        <li className='list_element ". link_active("aleatory") ."'>
          <a className="link" href={"/aleatory/id=" + props.random}>
            <i className="fa fa-random"></i>
            <span className="texto">Aleatorio</span>
          </a>
        </li>
        {/*if ($v['modulo'] !== "Edit") $v['menu'] .= render('Buscador');*/}
      </ul>
    </nav>
  );
}
export default Menu;