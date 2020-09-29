import React from 'react';
import '../styles/components/AnimeGrid.css';
import 'font-awesome/css/font-awesome.min.css';

export default class AnimeGrid extends React.Component {
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
            <div id='grid' className="tabcontent">
                {this.props.animes.map(anime => (
                    <a href={'/AnimeDetails/id='+anime.id} className="grid-anime" id={anime.id} key={anime.id}>
                    <div className="element_img"
                        style={{  
                            backgroundImage: "url(" + anime.src + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }}></div>
                    <div className="element_kind <?= $anime['kind_class']?>">{anime.kind} </div>
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
                </a>
                    
                ))}
            </div>
        )
    }
}
