import React from 'react';
import axios from 'axios';
import '../styles/pages/EndingsDetails.css';
import 'font-awesome/css/font-awesome.min.css';

export class EndingsDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }

      $("#add").click(function () {
        let cant = $("#cant").val();
        if (cant >= 0) $("#cant").val(parseInt(cant) + 1);
      });
      
      $("#remove").click(function () {
        let cant = $("#cant").val();
        if (cant > 0) $("#cant").val(parseInt(cant) - 1);
      });

      
      componentDidMount(){
          axios.get()
          .then((res) => {

          });
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default EndingsDetails;