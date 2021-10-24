import React, { Component } from 'react'
import '../styles/components/AnimeList.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default class AnimeList extends Component {
    constructor({props}) {
        super(props);
       /*  this.state = {
          listbooks:[]
        };
        this.mangment = this.mangment.bind(this);
        this.editable = this.editable.bind(this); */
      } 


    render() {
        return (
            <div id='lista' className="tabcontent" >
                {this.props.animes.map(anime => (
                     <Link href={'/AnimeDetails/'+anime.id} className="animes_element" id={anime.id} key={anime.id}>
                         <div className="img">
                             <img src={anime.src} alt={anime.titulo_es} />
                         </div>
                         <div className="info">
                             <h3>{anime.titulo_es}</h3>
                             <p>{anime.sinopsis_es}</p>
                             {/* <ul>
                             <?php foreach (anime['generes'] as $key => $value) : ?>
                                 <li> <?= $value ?> </li>
                             <?php endforeach;?>
                             </ul> */}
                         </div>
                     </Link>
                ))}
            </div>
        )
    }
}
