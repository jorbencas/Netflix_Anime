import React from 'react';
import Communication from '../services/index';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/components/Header.css';
import Menu from './Menu';
import Filters from './Filters';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            random: 0,
            user : '',
            langs : [],
            letters : [],
            years : [],
            generes : [],
            languajes : [],
            kinds : [],
            temporadas : [],
            filters : [
                {'title' : 'genere'},
                {'title' : 'type'},
                {'title' : 'year'},
                {'title' : 'lang'},
                {'title' : 'temporada'}
            ]
        };
    }
    
   /*  $(window).scroll(() => {
        let screenwidth = document.body.clientWidth;
             if (screenwidth > 1000) {
                var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrolled = (winScroll / height) * 100;
                document.getElementById("myBar").style.width = scrolled + "%";
             }
    });    */

    componentDidMount() {
        let that = this;
        Communication.getMethod(1,`Episodes&aq=getidrand`)
        .then(res => {
            that.setState({ random: res.id });
        }).catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        }).finally(() => {

        })

        Communication.getMethod(1,`Langs`, {
            "action" : "gettranslations", 
            "code" : 1, 
            "translations" : [
                {"kind" : "langs"}
            ]
        }).then(res => {
            that.setState({ langs: res });
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        }).finally(() => {

        })

        Communication.getMethod(1,`Filters`, {
            "action" : "getFilters"
        }).then(res => {
            that.setState({
                letters : res.letters,
                years : res.years,
                generes : res.generes,
                languajes : res.languajes,
                kinds : res.kinds,
                temporadas : res.temporadas,
            });
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        })
        .finally(() => {

        })

    }


    render() {
        const langs = this.state.langs.map((lang, key) => {
            const activeClass = lang.code == 'es' ? 'active' :  '';
            return ( <li key={key} className={activeClass + ' list_element'}><a className='link' href="es">{lang[lang['kind']]}</a> </li>);
        });

        const lettersFilter = "";
        if (this.state.letters > 0) {
            lettersFilter = this.state.filters.map( (filter, key) => {
                return ( <li key={key}>
                    <a className="link" role="menuitem">
                        {filter.title}
                    </a>
                </li> );
            });
        }

        const filters = this.state.filters.map( (filter ,key) => {
            return (
                <li key={key} className="letra-link collapsed" id={filter.id} onClick="tooglefilter(`<?=$filter['id']?>`)"
                    title={filter.title}>
                    <div className='link' role="button">
                        {filter.title}
                    </div>
                </li>
            );
        });

        return (
            <header>
                <section className="header">
                    <ul className="langs">
                        {langs}
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
                <Menu random={this.state.random} user={this.state.user}/>
                <div className="filters">
                    <ul className='menu' role="menu">
                        {lettersFilter}
                        {filters}
                    </ul>
                    <Filters elements={this.state.generes} id="g" />
                    <Filters elements={this.state.years} id="y" />
                    <Filters elements={this.state.kinds} id="k" />
                    <Filters elements={this.state.languajes} id="i" />
                    <Filters elements={this.state.temporadas} id="t" />
                </div>
            </header>
        )
    }
}


/*






*/