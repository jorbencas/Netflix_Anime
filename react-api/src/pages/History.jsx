import React from 'react';
import axios from 'axios';
import '../styles/pages/History.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class History extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            history : []
        };
        this.removeelement = this.removeelement.bind(this);
      }

        removeelement(id){
            axios.get(`http://localhost:3001/history/user/${this.props.match.params.id}`)
            .then((res) => {
              this.setState({history: res.data});
            });
        }
    
        componentDidMount(){
            axios.get(`http://localhost:3001/history/user/${this.props.match.params.id}`)
            .then((res) => {
              this.setState({history: res.data});
            });
        }

    render() {
        return (
            <div class="history">
                <div class="list">
                    {
                        this.state.history.map( episode => {
                            <li class="lista" id={episode['id']} >
                            <Link class="texto_line" to={'EpisodeDetails/'+episode.id}>
                                <div class="img"
                                    style={{  
                                        backgroundImage: "url(" + episode.src + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                      }}>
                                </div>
                                <p class="texto">
                                    {episode.anime_titulo_es} -
                                    {episode.titulo_es}
                                    <i class="fa fa-play"></i>
                                </p>
                            </Link>
                            <div class="info_avatar" onclick="removeelement(<?=$episode['id']?>)">
                                <i class='fa fa-trash' style='font-size:20px;'></i>
                            </div>
                        </li>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default History