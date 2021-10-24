import React from 'react';
import Communication from '../../services/index';
import './Filters.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import Filters from './Filters';

export default class FiltersContainer extends React.Component {
    state = {
        filterVisible: '',
        letters : [],
        years : [],
        generes : [],
        languajes : [],
        kinds : [],
        temporadas : [],
        filters : [
            { title : 'genere', kind : 'generes' },
            { title : 'type', kind : 'kinds' },
            { title : 'year', kind : 'years' },
            { title : 'lang', kind : 'languajes' },
            { title : 'temporada', kind : 'temporadas' }
        ]
    };

    componentDidMount(){
        Communication.getMethod(1,`Filters`, {
            "action" : "getFilters"
        }).then(res => {
            this.setState({
                letters : res.letters,
                years : res.years,
                generes : res.generes,
                languajes : res.lang,
                kinds : res.kind,
                temporadas : res.temporadas,
            });
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        })
        .finally(() => {
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className="filters">
                <ul className='menu' role="menu">
                    {
                        this.state.letters.map( (filter, key) => {
                            return ( 
                                <li key={key}>
                                    <Link className="link" role="menuitem" to={'Anime/'+filter.filter}>
                                        {filter.title}
                                    </Link>
                                </li> 
                            );
                        })
                    }

                    {
                        this.state.filters.map( (filter ,key) => {
                            return (
                                <li key={key} className="letra-link collapsed" id={filter.id} onClick={ () => this.setState({filterVisible:filter.kind})}
                                    title={filter.title}>
                                    <div className='link' role="button">
                                        {filter.title}
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                { this.state.filterVisible === 'generes' ? <Filters elements={this.state.generes} height='329' /> : null }
                { this.state.filterVisible === 'years' ? <Filters elements={this.state.years} height='188' /> : null }
                { this.state.filterVisible === 'kinds' ? <Filters elements={this.state.kinds} height='47' /> : null }
                { this.state.filterVisible === 'languajes' ? <Filters elements={this.state.languajes} height='47' /> : null }
                { this.state.filterVisible === 'temporadas' ? <Filters elements={this.state.temporadas} height='47' /> : null }
            </div>
        )
    }
}