import React from 'react';
import axios from 'axios';
import '../styles/components/Endings.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Endings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            endings : [],
            view : 'episodes'
        };
        this.rendergrid = this.rendergrid.bind(this);
        this.rendertabla = this.rendertabla.bind(this);
      }
      
      componentDidMount() {
        axios.get(`http://localhost:3001/endings/anime/${this.props.id}`)
        .then(res => {
            this.setState({ endings: res.data });
        });
    }

    rendergrid(){
        return(
<div id='endingrid'>
        { this.state.endings.map( (ending,i) => (
        <article className="grid-item" key={i}>
            <img className="image" src={ending.src} alt={ending.nombre} />
            <Link to={'endingsDetails/'+ending.id} className="overlay">
                <i className="fa fa-play-circle"></i>
            </Link>
            <p className="data">{ending.num} - {ending.nombre} </p>
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
                      this.state.endings.map( (ending , i ) => (
                  <Link to={'endingDetails/'+ending.id} >
                <tr role="row" className="tbody-row" key={ending.id}>
                    <td role="cell" className="tbody-cell">{ending.num} </td>
                    <td role="cell" className="tbody-cell">{ending.nombre} </td>
                    <td role="cell" className="tbody-cell">{ending.descripcion}</td>
                </tr>
                </Link>
                  ))
              }
            </tbody>
          </table>
        )
    }

    render() {
        let endingviews;
        switch (this.state.view) {
            case 'tabla':
                endingviews = this.rendertabla();
                break;
            default:
                endingviews = this.rendergrid();
                break;
        }
        return (
            <div>
                {endingviews}
            </div>
        )
    }

}

export default Endings;