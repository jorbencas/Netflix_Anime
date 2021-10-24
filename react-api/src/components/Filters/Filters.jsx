import React from 'react';
import './Filters.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

const Filters = (props) => {
    console.log(props.elements);
    return (
        <ul className="list" style={{height:props.height+'px'}}>
            {
                props.elements.map( (element, key) => {
                    return (
                        <li key={key}> 
                            <Link className='link' to={'Anime/'+element.filter}> 
                                {element.title} 
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Filters;