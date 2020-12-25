import React from 'react';
import axios from 'axios';
import '../styles/pages/EndingsDetails.css';
import 'font-awesome/css/font-awesome.min.css';
import BreadCrumb from '../components/Breadcrumb';
import Video from '../components/Video';

export class EndingsDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ending : {}
        };
      }
/* 
      $("#add").click(function () {
        let cant = $("#cant").val();
        if (cant >= 0) $("#cant").val(parseInt(cant) + 1);
      });
      
      $("#remove").click(function () {
        let cant = $("#cant").val();
        if (cant > 0) $("#cant").val(parseInt(cant) - 1);
      }); */

      
    componentDidMount(){
        axios.get(`http://localhost:3001/endings/id/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({ending: res.data});
        });
    }

    render() {
        return (
          <div>
          <section className="episode-page">
              <BreadCrumb params={this.state.ending} />
              <div className="element video">
                  <div className="element_title">
                      <h1>{this.state.ending.num} - {this.state.ending.nombre}</h1>
                  </div>
                  <div className="element_video">
                    <Video video={this.state.ending.src} poster={this.state.ending.poster} />
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

export default EndingsDetails;