import React from 'react';
import '../styles/components/Breadcrumb.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Breadcrumb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breadcrumb : []
        };
        this.getlink = this.getlink.bind(this); 
    }

    componentDidMount() {
        console.log(this.props.params);
        let bread = [
            {
                name: "Anime",
                href: "/Anime"
            },
            {
                name: this.props.params.anime_titulo_es,
                href: '/AnimeDetails/' + this.props.params.anime_id
            },
            {
                name: this.props.params.titulo_es,
                href: '/EpisodeDetails/' + this.props.params.id
            }
        ];
        this.setState({ breadcrumb: bread });
        console.log(bread);
    }

    getlink(bread,i){
        let link, count = this.state.breadcrumb.lenght;
        if (count - 1 === i) {
            link += <li className='b_link'><div className="elem current" >{bread.name}</div></li>
        } else {
            link += <li className='b_link'><Link className="elem" to={bread.href}>{bread.name}</Link></li>
        }
        return link;
    }

    render() {
        return(
            <div className='breadcrumb'>
                <ul className="breadcrumbs-one">
                    {
                        this.state.breadcrumb.map( (bread, i ) => {
                            this.getlink(bread,i);
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Breadcrumb;