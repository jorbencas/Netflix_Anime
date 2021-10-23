import React from 'react';
import '../styles/components/Filters.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements : props.elements, 
            id : props.id
        };
    }

    render() {
        let filters = '';
        if (this.state.elements) {
            filters = this.state.elements.map( (genere, key) => {
                return (
                    <li key={key}> 
                        <a className='link'> {genere.title} </a>
                    </li>
                )
            })
        }
        return (
            <ul className="list" id={this.state.id +"-list"}>
                {filters}
            </ul>
        )
    }
}