import React from 'react';
import axios from 'axios';
import '../styles/pages/AnimeDetails.css';
import 'font-awesome/css/font-awesome.min.css';
import Episodes from "../components/Episodes";
import Endings from "../components/Endings";
import Openings from "../components/Openings";
import Personages from "../components/Personages";
import Comments from "../components/Comments";

export default class AnimeDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            anime : {},
            view : 'episodes'
        };
        this.renderstateclass = this.renderstateclass.bind(this);
        this.rendergeneres = this.rendergeneres.bind(this);
        this.setview = this.setview.bind(this);
      }
      
    componentDidMount() {
        axios.get(`http://localhost:3001/animes/id/${this.props.match.params.param}`)
            .then(res => {
                this.setState({ anime: res.data });
            });
            //console.log(this.state.anime);
    }

    renderstateclass(){
        let state;
        switch (this.state.anime.state) {
            case 'En Emisión': state = "state_sucess"; break;
            case 'Pendiente': state = "state_warning"; break;
            case 'Finalizado': state = "state_danger"; break;
            default: state = "state_danger"; break;
        }
        return state
    }

    rendergeneres(){
        let node;
        let generes = this.state.anime.split(",");
        generes.map(element => (
            node +=`<li className='' > ${element} </li>`
        ));
        return node;
    }

    setview(view) { 
        if (this.state.view !== view) {
            this.setState({view:view});
        }
    }

    render() {
        let animeditailsview;
        switch (this.state.view) {
            case 'personages':
                 animeditailsview = <Personages id={this.props.match.params.param} />;
                break;
             case 'openings':
                 animeditailsview = <Openings id={this.props.match.params.param} />;
                 break;
            case 'endings':
                animeditailsview = <Endings id={this.props.match.params.param} />;
                break;
            default:
                 animeditailsview = <Episodes id={this.props.match.params.param} />;
                break;
        }

        
        return (
            <div>
                <div className="detail-page">
    <div className="banner">
        <div className="jumbotron">
            <img className="banner_img" src={this.state.anime.banner} alt={this.state.anime.titulo_es} />
        </div>
    </div>
    <div className="serie-header">
        <img src={this.state.anime.src} alt={this.state.anime.titulo_es} />
        <section className="serie-header-data">
            <h1 className="serie-header__title">{this.state.anime.titulo_es}</h1>
            <section className="serie-description">
                <article id='sinopsis' text={this.state.anime.sinopsis_es}>{this.state.anime.sinopsis_es} </article>
            </section>
            <div className="serie-header-metadata">
                <ul className="serie-header_genero">
                    <h3>Genero:</h3>
                    <ul>{this.rendergeneres}</ul>
                </ul>
                <ul className="serie-header_genero">
                    <h3>Estado</h3>
                    <li className={this.renderstateclass}>
                        {this.state.anime.state}
                    </li>
                </ul>
                <div className="serie-header_fecha"><i className="fa fa-calendar"> </i><span>
                    {this.state.anime.date_publication}</span></div>
                <div className="serie-header_fecha"><span>- {this.state.anime.date_finalization}</span></div>
                <div className="serie-header_genero">
                    <h3>Tipo </h3>
                    <li>{this.state.anime.kind}</li>
                </div>
{/*                 <?php if(isLogged()): ?>
                <div className="serie-header_rating">
                    <div className="star-rating">
                        <?php foreach ($vanimes']star_valorations'] as $key_valoration => $value): ?>
                        <span id="star-<?=$key_valoration?>-<?=$key?>">
                            <i className="<?=$value?>"></i>
                        </span>
                        <?php endforeach;?>
                    </div>
                    <input type="hidden" className="rating-value" value="{this.state.anime.valorations}">
                </div>
                <div className='favorite' onclick="setfavorite('{animes.head_favorite}', {animes.id}, this)">
                    <i className="{this.state.anime.head_favorite} "></i>
                </div>
                <?php endif; ?> */}
            </div>
        </section>
    </div>
</div>

<div className="toolbar">
    <ul className="tab">
        <button className={this.state.view === 'episodes' ? 'tablinks active': 'tablinks'} onClick={ () => { this.setview('episodes') } }>
            <p>Episodios ( {this.state.anime.num_epis} )</p>
        </button>
        <button className={this.state.view === 'personages' ? 'tablinks active': 'tablinks'}  onClick={ () => { this.setview('personage') } }>
            <p>Personages ( {this.state.anime.num_pers} )</p>
        </button>
        <button className={this.state.view === 'openings' ? 'tablinks active': 'tablinks'}  onClick={ () => { this.setview('opening') } }>
            <p>Openings ( {this.state.anime.num_opes} )</p>
        </button>
        <button className={this.state.view === 'endings' ? 'tablinks active': 'tablinks'}  onClick={ () => { this.setview('ending') } }>
            <p>Endings ( {this.state.anime.num_ends} )</p>
        </button>
    </ul>
</div>
<div className="tabcontent">
   {animeditailsview}
</div>
<Comments />
            </div>
        )
    }
}
