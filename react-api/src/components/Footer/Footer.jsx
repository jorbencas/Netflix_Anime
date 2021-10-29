import React from 'react'
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import Communication from 'services/index';
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    state = {
        animes : [],
        date : new Date().getFullYear()
    }

    componentDidMount(){
        Communication.getMethod(1,'Anime&aq=lastanimes&as=0_9&od=id')
        .then(res => {
            this.setState({animes:res});
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        }).finally(() => {
            //console.log(this.state);

        });
    }

    render() {
        return (
            <footer>
                <div className="footer-list">
                    {
                        this.state.animes.map( (anime, key) => {
                            return (
                                <Link className='element_container' to={'/AnimeDetails/'+anime.id} key={key}>
                                    <div className="element_text"><p>{anime.titulo}</p></div>
                                </Link>
                            );
                        })
                    }
                </div>

                <div className='footer-logo'>
                    <Link className='logo' to="/">
                        2017 - {this.state.date}
                    </Link>
                    {/* <iframe width="300px" height="360px" scrolling="yes" frameborder="0" src="http://www.dailymotion.com/badge/user/kirito-kirigaya3?type=carousel"></iframe>
                    <ul className='contador'>
                    
                    </ul> */}
                    <div className="sidenav">
                        <a className='element' href='https://twitter.com/kirito123kazut2'>   
                            <span><i className='fa fa-twitter'></i></span>
                            <p>Twitter</p>     
                        </a>
                        <a className='element' href='https://www.facebook.com/profile.php?id=100004654665874&fref=ts'>
                            <span><i className='fa fa-facebook'></i></span>
                            <p>Facebook</p>        
                        </a>
                        <a className='element'  href='https://plus.google.com/u/0/'> 
                            <span><i className='fa fa-google-plus'></i></span>
                            <p>Google Plus</p>       
                        </a>
                        <a className='element' href='https://www.youtube.com/channel/UCRyM2yRz4eOKi3c66MOfx-Q'>  
                            <span><i className='fa fa-youtube'></i></span>
                            <p>Youtube</p>      
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}