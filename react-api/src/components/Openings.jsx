import React from 'react';
import axios from 'axios';
import '../styles/components/Openings.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Openings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openings : [],
            view : 'episodes'
        };
        this.rendergrid = this.rendergrid.bind(this);
        this.rendertabla = this.rendertabla.bind(this);
      }
      
      componentDidMount() {
        axios.get(`http://localhost:3001/openings/anime/${this.props.id}`)
        .then(res => {
            this.setState({ openings: res.data });
        });
    }

    rendergrid(){
        return(
<div id='openingrid'>
        { this.state.openings.map( opening => (
        <article className="grid-item" key={opening.id}>
            <img className="image" src={opening.src} alt={opening.nombre} />
            <Link to={'/OpeningsDetails/'+opening.id} className="overlay">
                <i className="fa fa-play-circle"></i>
            </Link>
            <p className="data">{opening.num} - {opening.nombre} </p>
        </article>
        ))
        }
      </div>
        )
    }

    rendertabla(){
        return(
            <table className="table">
            <tbody className="table-tbody" role="tablist">
                  {
                      this.state.openings.map( (opening , i ) => (
                  <Link to={'OpeningDetails/'+opening.id} >
                <tr role="row" className="tbody-row" key={opening.id}>
                    <td role="cell" className="tbody-cell">{opening.num} </td>
                    <td role="cell" className="tbody-cell">{opening.nombre} </td>
                    <td role="cell" className="tbody-cell">{opening.descripcion}</td>
                </tr>
                </Link>
                  ))
              }
            </tbody>
          </table>
        )
    }

    render() {
        let openingview;
        switch (this.state.view) {
            case 'tabla':
                openingview = this.rendertabla();
                break;
            default:
                openingview = this.rendergrid();
                break;
        }
        return (
            <div>
                {openingview}
            </div>
        )
    }
}

export default Openings;