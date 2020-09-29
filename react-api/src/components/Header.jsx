import React from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/components/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            random: 0
        };
        //this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        axios.get(`http://localhost:3001/episodes/getidrand`)
        .then(res => {
            this.setState({ random: res.data });
        });
    }

    

    render() {
        return (
            <header>
                <section className="header">
                    <ul className="langs">
                        <li className='list_element active'><a className='link' href="es">Español</a> </li>
                        <li className='list_element'><a className='link' href="en">Ingles</a> </li>
                        <li className='list_element'><a className='link' href="ca">Catalan</a> </li>
                        <li className='list_element'><a className='link' href="va">Valenciano</a> </li>
                    </ul>
                </section>

                <div className="menu_bar">
                        <a className='link' href="/Login">
                            <i className="fas fa-user-circle"></i>
                            <span className='texto'>iniciar_sesion</span>
                        </a>
                        <a className='link' href="/Register">
                            <i className="fas fa-user"></i>
                            <span className='texto'>registro</span>
                        </a>
                    
                        <a className='link user' href="/User">
                            <img  src="avatar" alt='usuario' />
                            <span className='texto'>usuario</span>
                        </a>
                        {/* <a className='link cart' href="/Cart">
                            <span className="badge">number_products']?></span>
                            <i className="fas fa-shopping-cart"></i>
                        </a> 
                        <a className='link' id='salir' href='/api&am=Auth&aa={$v['usuario']}") ?>'>
                            <i className='fas fa-sign-out-alt'></i> <span className='texto'>salir</span>
                        </a> */}
                </div>

                <nav id='navbar'>
                    <ul className='list'>
                        <li className='list_element ". link_active("Home") ."'><a className='link' href='/Home'>
                                <i className='fa fa-home'></i>
                                <span className='texto'>". translate('Header','titulo') ."</span>
                            </a></li>
                        <li className='list_element ". link_active("Anime, AnimeDetails, EpisodesDetails") ."'><a className='link' href='/Anime'>
                                <i className='fa fa-list-ul'></i>
                                <span className='texto'>Lista de Animes</span>
                {/*             if (isLogged()) $v['menu'] .= " <!--<span className='badge movil_disabled'>3</span>--> ";
                */}        
                </a></li>
                      {/*   <li className='list_element ". link_active('ComingSoon') ."'><a className='link' href='/ComingSoon'>
                                <i className='fas fa-book-open'></i>
                                <span className='texto'>Mangas</span>
                                <li className='list_element movil_disabled ". link_active("Auth") ."'><a className='link' href='/Auth'>
                                    <i className='far fa-user-circle'></i>
                                    <span className='texto'>". translate('Header','iniciar_sesion') . " / " . translate('Header','registro') ."</span>
                                    </a></li>
                                </a></li>    */} 
                {/*    if (isLogged()) {
                    $v['menu'] .= "
                    <li className='list_element movil_disabled ". link_active("User") ."'><a className='link user' href='/User") ."'>
                            <img  src=' $avatar ' alt=' $usuario '>
                            <span className='texto'> $usuario </span>
                        </a></li>
                    <li className='list_element movil_disabled'><a className='link' id='salir' href='".  hrefMake("{$v['lang']}/api&am=Auth&aa=$usuario") ."'>
                            <i className='fas fa-sign-out-alt'></i> <span className='texto'>". translate('Header','salir') ."</span>
                        </a></li>
                    <li className='list_element movil_disabled ". link_active("Cart") ."'><a className='link' href=' hrefMake('{$v['lang']}/Cart')'>
                        <span className='badge movil_disabled'> $number_products</span>
                            <i className='fas fa-shopping-cart'></i></a>
                    </li>
                    ";};*/
            
                    <li className='list_element ". link_active("aleatory") ."'><a className='link' href={'/aleatory/id=' + this.state.random}>
                        <i className='fas fa-random'></i>
                        <span className='texto'>Aleatorio</span>
                    </a></li>
/*
                    if ($v['modulo'] !== "Edit") $v['menu'] .= render('Buscador');
                */}
                </ul>
        
                </nav>

            </header>
        )
    }
}
