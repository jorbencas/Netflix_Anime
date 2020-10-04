import React from 'react';
import axios from 'axios';
import '../styles/pages/Animes.css';
import 'font-awesome/css/font-awesome.min.css';
import AnimeGrid from '../components/AnimeGrid';
import AnimeList from '../components/AnimeList';
import AnimeTable from '../components/AnimeTable';

class Anime extends React.Component {

    constructor() {
        super();
        this.state = {
            animes : [],
            view: 'grid'
        };
        this.setview = this.setview.bind(this);
      }

    componentDidMount(){
        axios.get(`http://localhost:3001/Animes`)
        .then(res => {
        this.setState({animes:res.data.data});
        });
    }

    setview(view) { 
        if (this.state.view !== view) {
            this.setState({view:view});
        }
    }

    render() {
        //const { AnimeStore } = this.props;
       let animeview;
       switch (this.state.view) {
           case 'list':
                animeview = <AnimeList animes={this.state.animes} />;
               break;
            case 'table':
                animeview = <AnimeTable animes={this.state.animes} />;
                break;
           default:
                animeview = <AnimeGrid animes={this.state.animes} />;
               break;
       }

        return (
            <div className='listanime-page' id="listado_anime">
                 <div className="toolbar">
                    <h4></h4>
                        <ul className="tab">
                            <a href='/Anime/od=id' className="tablinks activo"> <i className="fa fa-sort-down"></i> </a>
                            <a href='/Anime/oa=id' className="tablinks activo"> <i className="fa fa-sort-up"></i> </a>
                            <button className={this.state.view === 'grid' ? 'tablinks active': 'tablinks'} onClick={ () => {this.setview('list')}} > <i className="fa fa-th"></i></button>
                            <button className={this.state.view === 'list' ? 'tablinks active': 'tablinks'} onClick={ () => {this.setview('grid')}} > <i className="fa fa-bars"></i></button>
                        </ul>
                </div>
                {animeview}
            </div>
        )
    }
}
export default Anime;
//export default inject("AnimeStore")(observer(Anime));