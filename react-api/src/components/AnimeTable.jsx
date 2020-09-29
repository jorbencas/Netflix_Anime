import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';

export default class AnimeTable extends Component {
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
      <div id="tabla" className="tabcontent" >
        <table className="table" role="table">
          <thead className="table-thead">
            <tr role="rowheader">
              <td role="cell" className="thead-cell">
                Titulo
              </td>
              <td role="cell" className="thead-cell">
                Fecha de inicio
              </td>
              <td role="cell" className="thead-cell">
                Fecha de fin
              </td>
              <td role="cell" className="thead-cell">
                Estado
              </td>
              <td role="cell" className="thead-cell">
                Valoraciones
              </td>
              <td role="cell" className="thead-cell">
                Favorito
              </td>
            </tr>
          </thead>
          <tbody className="table-tbody" role="tablist" id="idTableRankingBody">
            {this.props.animes.map((anime) => (
              <tr
              key={anime.id}
                role="row"
                className="tbody-row"
                /* onClick="hrefedit(this)" */
                data-href={"/Edit&id=" + anime.id}
              >
                <td role="cell" className="tbody-cell">
                  {anime.titulo_es}
                </td>
                <td role="cell" className="tbody-cell">
                  {anime.date_publication}
                </td>
                <td role="cell" className="tbody-cell">
                  {anime.date_finalization}
                </td>
                <td role="cell" className="tbody-cell">
                  {anime.state}
                </td>
                {/* <td role="cell" className="tbody-cell" >
                                                <div className="serie-header_rating">
                                                    <div className="star-rating">
                                                        <?php foreach ($anime['star_valorations'] as $k => $value): ?>
                                                        <span id="star-<?=$k?>-<?=$key?>">
                                                            <i className="<?=$value?>"></i>
                                                        </span>
                                                        <?php endforeach;?>
                                                    </div> 
                                                    <input type="hidden" className="rating-value" value="<?=$v['stars']?>">
                                                </div>
                                            </td>*/}
                <td role="cell" className="tbody-cell">
                  <div className="favorite">
                    <i className={anime.head_favorite}></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
