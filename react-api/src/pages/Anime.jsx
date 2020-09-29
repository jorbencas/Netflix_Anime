import React from 'react';
import axios from 'axios';
import '../styles/pages/Animes.css';
import AnimeGrid from '../components/AnimeGrid';
import AnimeList from '../components/AnimeList';
import AnimeTable from '../components/AnimeTable';
import 'font-awesome/css/font-awesome.min.css';

class Anime extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }


    componentDidMount(){
        axios.get(`http://localhost:3001/Animes`)
        .then(res => {
        this.setState({animes:res.data.data});
        });
    }

    render() {
        //const { AnimeStore } = this.props;
        return (
            <div className='listanime-page' id="listado_anime">
                 <div className="toolbar">
                    <h4></h4>
                        <ul className="tab">
                            <a href='/Anime/od=id' className="tablinks activo"> <i className="fas fa-sort-down"></i> </a>
                            <a href='/Anime/oa=id' className="tablinks activo"> <i className="fas fa-sort-up"></i> </a>
                            <button className="tablinks active" /* onClick="setab(event, 'lista', true)" */> <i className="fas fa-th"></i></button>
                            <button className="tablinks" /* onClick="setab(event, 'grid', true)" */> <i className="fas fa-bars"></i></button>
                        </ul>
                </div>

                <AnimeGrid animes={this.state.animes} />
                <AnimeList animes={this.state.animes} />
                <AnimeTable animes={this.state.animes} />
            </div>
        )
    }
}
export default Anime;
//export default inject("AnimeStore")(observer(Anime));