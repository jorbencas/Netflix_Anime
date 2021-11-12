import React, { useEffect, useState } from 'react';
import Communication from 'services/index';
import 'font-awesome/css/font-awesome.min.css';
import 'components/Header/Header.css';
import Langs from 'components/Langs/Langs';
import { Link, useLocation } from "react-router-dom";
import FiltersContainer from 'components/Filters/FiltersContainer';
import Buscador from 'components/Buscador/Buscador';

const Header = () => {
    const location = useLocation();
    const [ langVisible, setLangVisible ] = useState(false);
    const [ random, setRandom ] = useState(0);
    const [ kind, setKind ] = useState('');
    const [ user, setUser ] = useState('');
    const [ numProducts, setNumProducts ] = useState(0);
    const [ urlAuth, setUrlAuth ] = useState('');
    
   /*  $(window).scroll(() => {
        let screenwidth = document.body.clientWidth;
             if (screenwidth > 1000) {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.getElementById("myBar").style.width = scrolled + "%";
             }
    });    */

    useEffect(() => {
        Communication.getMethod(1,`Episodes&aq=getidrand`)
        .then(res => {
            setRandom(res.id); 
            setKind(res.kind);
        }).catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        })
        // return () => {
        //     cleanup
        // }
    }, [])

    const LogIn = (menu) => {
        if (menu === 'movil') {
            return(
                <>
                    <Link className='link cart' href="/Cart">
                        <span className="badge">{numProducts}</span>
                        <i className="fas fa-shopping-cart"></i>
                    </Link> 
                        <Link className='link' id='salir' >
                        <i className='fas fa-sign-out-alt'></i> <span className='texto'>salir</span>
                    </Link>
                </>
            )
        }else {
            return (
                <>
                    <li className='list_element movil_disabled'>
                        <Link className='link user' to='/User'>
                            <img src=' $avatar ' alt=' $usuario ' />
                            <span className='texto'>{user}</span>
                        </Link>
                    </li>
                    <li className='list_element movil_disabled'>
                        <Link className='link' id='salir' to='' >
                            <i className='fas fa-sign-out-alt'></i> 
                            <span className='texto'>Salir</span>
                        </Link>
                    </li>
                    <li className='list_element movil_disabled'>
                        <Link className='link' to='/Cart'>
                            <span className='badge movil_disabled'> {numProducts}</span>
                            <i className='fas fa-shopping-cart'></i>
                        </Link>
                    </li>
                </>
            )
        }
    }

    const linkActive = (page) => {
        return location.pathname.includes(page) ? ' active' : '';
    }

    return (
        <header>
            { langVisible ? <Langs /> : null }
            <div className="menu_bar">
                <Link className='link' to="/Login">
                    <i className="fas fa-user-circle"></i>
                    <span className='texto'>iniciar_sesion</span>
                </Link>
                <Link className='link' to="/Register">
                    <i className="fas fa-user"></i>
                    <span className='texto'>registro</span>
                </Link>
                <Link className='link user' to="/User">
                    <img src="avatar" alt='usuario' />
                    <span className='texto'>usuario</span>
                </Link>
                { user !== '' ? LogIn('movil'): null}
            </div> 
            <nav id="navbar">
                <ul className="list">
                    <li className={'list_element' + linkActive('/')}>
                        <Link className="link" to="/">
                            <i className="fa fa-home"></i>
                            <span className="texto">Inicio</span>
                        </Link>
                    </li>
                    <li className={'list_element' + linkActive('Anime, AnimeDetails')}>
                        <Link className="link" to="/Anime">
                            <i className="fa fa-list-ul"></i>
                            <span className="texto">Animes</span>
                            {/* if (isLogged()) $v['menu'] .= " <!--<span className='badge movil_disabled'>3</span>--> "; */}
                        </Link>
                    </li>
                    <li className={'list_element' + linkActive('blog')}>
                        <Link className='link' to='/blog'>
                            <i className='fa fa-blog'></i>
                            <span className='texto'>Blog</span>
                            {/* if ($v['islogged']) $v['menu'] .= " <span className='badge movil_disabled'>3</span> "; */}
                        </Link>
                    </li>
                    <li className={'list_element movil_disabled' + linkActive("signin, signup")}>
                        <Link className="link" to="/signin">
                            <i className="fa fa-user-circle"></i>
                            <span className="texto">Iniciar Sessión / Registro </span>
                        </Link>
                    </li>
                    { user !== '' ? LogIn : null}
                    <li className={'list_element' + linkActive("aleatory, endings, episodes, openings")}>
                        <Link className="link" to={"/aleatory/" + random + '/'+ kind}>
                            <i className="fa fa-random"></i>
                            <span className="texto">Aleatorio</span>
                        </Link>
                    </li>
                    <Buscador />
                    <li className='list_element'>
                        <div className='link' onClick={ () => { setLangVisible(!langVisible) }}>
                            <i className='fa fa-language'></i>
                            <span className='texto'>Idiomas</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <FiltersContainer/>
        </header>
    )
}
export default Header;