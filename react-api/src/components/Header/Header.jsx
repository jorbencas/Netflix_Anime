import React from 'react';
import Communication from '../../services/index';
import 'font-awesome/css/font-awesome.min.css';
import './Header.css';
import Menu from '../Menu/Menu';
import FiltersContainer from '../Filters/FiltersContainer';

export default class Header extends React.Component {
    state = {
        random: 0,
        user : '',
        langs : []
    };
    
   /*  $(window).scroll(() => {
        let screenwidth = document.body.clientWidth;
             if (screenwidth > 1000) {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.getElementById("myBar").style.width = scrolled + "%";
             }
    });    */

    componentWillMount() {
        let ran;
        Communication.getMethod(1,`Episodes&aq=getidrand`)
        .then(res => {
            ran = res.id;
        }).catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        }).finally(() => {
            //console.log(this.state);
            console.log("**************");
        })

        Communication.getMethod(1,`Langs`, {
            "action" : "gettranslations", 
            "code" : 1, 
            "translations" : [
                {"kind" : "langs"}
            ]
        }).then(res => {
            this.setState({ langs: res, random : ran });
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        }).finally(() => {
            //console.log(this.state);

        })
    }

    render() {
        return (
            <header>
                <section className="header">
                    <ul className="langs">
                        {
                            this.state.langs.map((lang, key) => {
                                const activeClass = lang.code === 'es' ? 'active' :  '';
                                return ( <li key={key} className={activeClass + ' list_element'}><a className='link' href="es">{lang[lang['kind']]}</a> </li>);
                            })
                        }
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
                        {/*<a className='link cart' href="/Cart">
                            <span className="badge">number_products']?></span>
                            <i className="fas fa-shopping-cart"></i>
                        </a> 
                         <a className='link' id='salir' href='/api&am=Auth&aa={$v['usuario']}") ?>'>
                            <i className='fas fa-sign-out-alt'></i> <span className='texto'>salir</span>
                        </a>  */}
                </div> 
                {/* <Menu random={this.state.random} user={this.state.user}/>
                <FiltersContainer/> */}
            </header>
        )
    }
}