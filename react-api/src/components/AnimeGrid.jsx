import React from 'react';
import '../styles/components/AnimeGrid.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default class AnimeGrid extends React.Component {
    constructor({props}) {
        super(props);
        this.renderkindclass = this.renderkindclass.bind(this);
      } 

      renderkindclass(anime){
        let state = 'element_kind ';
        switch (anime.kind) {
            case 'pelicula': state += 'pelicula'; break;
            case 'ova': state += 'ova';  break;
            default: state += 'serie';  break;
        }
        return state
    }

    $(document).ready(function(){rendertext()});

function rendertext(){
    $(".grid-anime").each(function(index,element){
        let node = element.children[2].children[1];
        if (node.textContent.length > 150) {
            node.textContent = node.textContent.substring(0,149) +"...";
        }
    });
}

    render() {
        return (
            <div id='grid' className="tabcontent">
                {this.props.animes.map(anime => (
                    <Link to={'/AnimeDetails/'+anime.id} className="grid-anime" id={anime.id} key={anime.id}>
                    <div className="element_img"
                        style={{  
                            backgroundImage: "url(" + anime.src + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }}></div>
                    <div className={this.renderkindclass(anime)} >{anime.kind} </div>
                    {/* <div className="<?= $anime['nuevo'] ?>">Nuevo</div> */}
                    <div className="element_text">
                        <p className='titulo'>{anime.titulo_es}</p>
                        <p>{anime.sinopsis_es}</p>
                
                        {/* <?php if(islogged() && $v['modulo'] == "Anime")  : ?>
                        <div className="serie-header_rating">
                            <div className="star-rating">
                                <?php foreach ($anime['star_valorations'] as $k => $value): ?>
                                <span id="star-<?=$k?>-<?=$anime['id']?>" onClick="setvalorations(<?= $k ?>, <?= $anime['id'] ?>)">
                                    <i className="<?=$value?>"></i>
                                </span>
                                <?php endforeach;?>
                            </div>
                            <input type="hidden" className="rating-value" value="<?=$anime['valorations']?>">
                        </div>
                        <?php endif;?> */}
                    </div>
                </Link>
                    
                ))}
            </div>
        )
    }
}
