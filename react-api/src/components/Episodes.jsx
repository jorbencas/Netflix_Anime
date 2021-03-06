import React from 'react';
import axios from 'axios';
import '../styles/components/Episodes.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Episodes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episodes : [],
            view : 'list'
        };
        this.renderlist = this.renderlist.bind(this);
        this.rendertable = this.rendertable.bind(this);
      }
      

    componentDidMount() {
        axios.get(`http://localhost:3001/episodes/anime/${this.props.id}`)
        .then(res => {
            this.setState({ episodes: res.data });
            console.log(this.state.episodes);
        });
    }

    renderlist(){
        return (
            <div className='episodegrid'>
            { this.state.episodes.map( episode => (
                <article className="grid-item" key={episode.id}>
                    <img className="image" src={episode.src} alt={episode.titulo_es} />
                    <Link to={'/EpisodesDetails/' + episode.id} className="overlay">
                        <i className="fa fa-play-circle"></i>
                    </Link>
                    <p className="data">{ episode.num} {episode.titulo_es}</p>
                </article>
            ))
            }
        </div>
        )
    }

    rendertable(){
        return (
            <table className="table">
                <tbody className="table-tbody" role="tablist">
                    {
                        this.state.episodes.map( episode => (
                            <Link to={'/EpisodesDetails/ ' + episode.id} >
                            <tr role="row" className="tbody-row" onclick="hrefedit(this)" key={episode.id}>
                                <td role="cell" className="tbody-cell"><i className="fa fa-play"></i></td>
                                <td role="cell" className="tbody-cell"> { episode.num} </td>
                                <td role="cell" className="tbody-cell"> { episode.titulo_es} </td>
                            </tr>
                            </Link>
                        ))
                    }
                </tbody>
            </table>
        )
    }

    render() {
        let episodelist;
        switch (this.state.view) {
            case 'table':
                episodelist = this.rendertable();
                break;
            default:
                episodelist = this.renderlist();
                break;
        }
        return (
            <div>
                {episodelist}
            </div>
        )
    }
}

export default Episodes
