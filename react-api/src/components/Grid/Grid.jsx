import React from 'react';
import 'components/Grid/Grid.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { useParams, useLocation, useRouteMatch } from "react-router-dom";

const Grid = (props) => {
    const renderkindclass = (anime) => {
        let state = 'element_kind ';
        switch (anime.kind) {
            case 'pelicula': state += 'pelicula'; break;
            case 'ova': state += 'ova';  break;
            default: state += 'serie';  break;
        }
        return state
    }

    return (
        <div className="tabcontent">
            {props.animes.map(anime => (
                <Link to={'/AnimeDetails/'+anime.id+'/'+anime.kind} className="grid-anime" key={anime.id}>
                <div className="element_img"
                    style={{  
                        backgroundImage: "url(" + anime.src + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}></div>
                <div className={renderkindclass(anime)} >{anime.kind} </div>
                {/* <div className="<?= $anime['nuevo'] ?>">Nuevo</div> */}
                <div className="element_text">
                    <p className='titulo'>{anime.titulo}</p>
                    <p>{anime.sinopsis.length > 150 ? anime.sinopsis.substr(0,149)+ '....' : anime.sinopsis}</p>
            
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
export default Grid;