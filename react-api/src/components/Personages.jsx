import React from 'react';
import axios from 'axios';
import '../styles/components/Personages.css';
import 'font-awesome/css/font-awesome.min.css';

export class Personages extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            personages: [],
            personage: {},
            diamond_left:0
        };
        this.renderdetail = this.renderdetail.bind(this);
        this.positiodiamonimg = this.positiodiamonimg.bind(this);
    }

    componentWillMount() {
        axios.get(`http://localhost:3001/personages/anime/${this.props.id}`)
        .then(res => {
            this.setState({ personages: res.data });
            this.renderdetail(this.state.personages[0].id);
            this.setState({diamond_left:this.defaultleft()});
        });        
    }

    defaultleft(){
        if (document.body.clientWidth > 800) {
            return this.state.personages.lenght > 50 ? -340 : -100;
        } else {
            return this.state.personages.lenght > 50 ? -10 : 0;
        }
    }

    positiodiamonimg(indice) {
        let left;
        if((indice + 1) > 1){
            if (document.body.clientWidth > 800) {
                left = this.state.diamond_left + (indice * 25);
            } else {
                left = this.state.diamond_left + (indice * 16);
            }
        }else left = this.state.diamond_left;
        return left;
    }

    renderdetail(id) {
        this.setState({
            personage:
                this.state.personages.find(e => {
                    if (e.id == id) return e;
                })
        });
    }

    render() {
        let that = this;
        return (
            <div >
                <section className='container'>
                    <div className="child">
                        {
                            this.state.personages.map((personage, i) => (
                                <article style={{left: that.positiodiamonimg(i) + "%"}} onClick={() => this.renderdetail(personage.id)} key={i} className="personage_list">
                                    <div className="img" style={{
                                        backgroundImage: "url(" + personage.src + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}></div>
                                    <div className="info">{personage.nombre}</div>
                                </article>
                            ))
                        }
                    </div>
                </section>
                <section className='movil_container'>
                    {/*   <div className="movil_child">
            {
                    this.state.personages.map( personage => (
                        <article onClick="detail(personage.id)" key={personage.id} className="personage_list">
                        <div className="img" style={{  
                        backgroundImage: "url(" + personage.src + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></div>
                        <div className="info">{personage.nombre}</div>
                    </article>
                    ))
                }
            </div> */}
                </section>

                <section className='PersonageDetails'>
                    {
                        <article className='modal' id={this.state.personage.id} role="article">
                            <div className="modal_container">
                                <div className="personage-modal first">
                                    <img className="image" src={this.state.personage.src} alt={this.state.personage.nombre} />
                                </div>
                                <div className="personage-modal second">
                                    <div className="row">
                                        <p>{this.state.personage.descripcion}</p>
                                    </div>
                                    <div className="row">
                                        <p>{this.state.personage.fecha_nacimiento}</p>
                                        <p>{this.state.personage.fecha_muerte}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    }
                </section>
                {/* <table className="table" role='table'>
            <tbody className="table-tbody" role="tablist" id="idTableRankingBody">
            <?php foreach ($v['personage'] as $key => $char) : ?>
                <tr role="row" className="tbody-row" onClick="hrefedit(this)" data-href="<?=hrefMake("{$v['lang']}/Edit&id={$char['anime']}") ?>">
                    <td role="cell" className="tbody-cell"><i className='far fa-user'></i></td>
                    <td role="cell" className="tbody-cell"><?= $char['nombre'] ?> </td>
                </tr>         
            <?php endforeach; ?>
            </tbody>
        </table> */}

            </div>
        )
    }
}

export default Personages
