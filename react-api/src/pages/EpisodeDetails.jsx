import React from 'react';
import axios from 'axios';
import '../styles/pages/EpisodeDetails.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import BreadCrumb from '../components/Breadcrumb';
import Video from '../components/Video';

class EpisodeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episode: {}
        };
    }

  /*   $("#add").click(function () {
        let cant = $("#cant").val();
        if (cant >= 0) $("#cant").val(parseInt(cant) + 1);
      });
      
      $("#remove").click(function () {
        let cant = $("#cant").val();
        if (cant > 0) $("#cant").val(parseInt(cant) - 1);
      });
 */
      
    componentWillMount(){
        axios.get(`http://localhost:3001/episodes/id/${this.props.match.params.id}`)
        .then(res => {
            this.setState({ episode: res.data });
            console.log(this.state.episode);
        });
    }

    render() {
        return (
            <div>
                <section className="episode-page">
                    <BreadCrumb params={this.state.episode} />
                    <div className="element video">
                        <div className="element_title">
                            <h1>{this.state.episode.num} - {this.state.episode.titulo_es}</h1>
                        </div>
                        <div className="element_video">
                            <Video video={this.state.episode.src} poster={this.state.episode.poster} />
                        </div>
                        {/*< div className="options">
            <ul className="options">
                <?= $v['prev'] ?>
                <?= $v['next'] ?>
            </ul>
        </div> */}
                    </div>

                    {/*  <?php if (isLogged() && ($v['modulo'] == 'aleatory' ||  $v['modulo'] == 'EpisodesDetails')) : ?>
    <div className="element">
        <div className="options">
            <div className="option">
                <p>Audio: </p>
                <select name="episode_languaje" id="selector episode" onchange='setlang()'>
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                    <option value="va">Valencia</option>
                </select>
            </div>
            <div className="option">
                <p>Subtitulos: </p>
                <select name="episode_sub" id="selector episode">
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="option actions">
                <button className='submit' id='remove'><i className="fas fa-minus"></i></button>
                <input type="number" name="cant" id="cant" min='0' max='100' value='0'>
                <button className='submit' id='add'><i className="fas fa-plus"></i></button>
            </div>
            <div className="option actions">
                <button className='submit' type="submit"><i className="fas fa-shopping-cart"></i> Añadir al carrito</button>
            </div>
        </div>
    </div>
    <?= render('Collections')>
    <?php endif; ?>
    <?= render('Comments')?>
</section> */}
                </section>
            </div>
        )
    }
}

export default EpisodeDetails;