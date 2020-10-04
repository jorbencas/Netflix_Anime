import React from 'react'
import axios from 'axios';
import AnimeGrid from '../components/AnimeGrid';
import Slider from '../components/Slider';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/pages/Home.css';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes: [],
            sliders: [],
            episodes: []
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/animes/0_11`)
            .then(res => {
                this.setState({ sliders: res.data.data });
            });
        console.log(this.state.sliders);
        axios.get(`http://localhost:3001/episodes/0_9`)
            .then(res => {
                this.setState({ episodes: res.data.data });
            });
            console.log(this.state.episodes);
        axios.get(`http://localhost:3001/animes/lastanimes`)
            .then(res => {
                this.setState({ animes: res.data.data });
            });
        console.log(this.state.animes);
        /*axios.get(`http://localhost:3001/Animes`)
        .then(res => {
        this.setState({animes:res.data.data});
        }); */

        /*   $data = api('Filters&aq=getFilters');
          $filters = $data['status']['code'] == 200 ? $data['data'] : null;
        
          $v['generes'] = "<!-- -->";
          $filters['generes'][0]['avable'] = true;
          $value = $filters['generes'][0]['filter'];
          "Filters&aa=generes_{$value}&p=0_9";
       */
    }


    render() {
        return (
            <div>
                <div id="home">
                    <div className="slider">
                        <Slider animes={this.state.sliders} />
                    </div>
                    <div className="lista_proximas">
                        <h3>Proximos Estrenos</h3>
                        <ul>
                            {this.state.episodes.map((episode) => (
                                <li className="lista" key={episode.id}>
                                    <a className="texto_line" href={"EpisodesDetail/&id=" + episode.id}>
                                        <div className="img" style={{
                                            backgroundImage: "url(" + episode.src + ")",
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                        ></div>
                                        <p className="texto">
                                            {episode.anime_titulo_es} -
                                            {episode.titulo_es}
                                            <i className="fa fa-play"></i>
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="home_body">
                    <div className="home_body_content">
                        {/*     <?php if (isLogged()) : ?>
      <?php if (!empty($v['animes'])): ?>
        <h3>Mis Animes</h3>
        <?=render("Anime_Grid", $v['animes'])?>
      <?php endif;?>
    <?php else :?> */}

                        <h3>Listado de animes de la temporada</h3>
                        <AnimeGrid animes={this.state.animes} />
                    </div>
                    <div className="home_body_content generes">

                        {/*   <div className='home_slide_banner'><h3>$value</h3> <a className='link' href='". hrefMake("{$v['lang']}/Anime&f=generes_$value") ."'>Ver mas + </p></div>";
   <AnimeGrid animes={this.state.animes} />
    <div id='generes_final'></div>
  </div> */}
                    </div>
                    {/* <div className="div" style='display:none;'><?= $v['filters'] ?></div>
 */} <a href="http://www.contadorvisitasgratis.com" target="_Blank" rel="noopener noreferrer"></a><br />
                    <script type="text/javascript" src="http://counter2.fcs.ovh/private/countertab.js?c=928439c3c54d65c5411de22048a97cbe"></script>
                </div>
        </div>
        )
    }
}

export default Home;
