import React, { useEffect, useState } from 'react'
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import Communication from 'services/index';
import { Link } from "react-router-dom";

const Footer = () => {
    const [ animes, setAnimes ] = useState(null);

    useEffect(() => {
        Communication.getMethod(1,'Anime&aq=lastanimes&as=0_9&od=id')
        .then(res => {
            setAnimes(res);
        })
        .catch(() => {
            // dispatch({
            //     type: 'ERROR_USERS',
            //     payload: null
            // })
        });
        return () => {
            setAnimes(null);
        }
    }, [])

    return (
        <footer>
            <div className="footer-list">
                {
                    animes ? animes.map( (anime, key) => {
                        return (
                            <Link className='element_container' to={'/AnimeDetails/'+anime.id+'/'+anime.kind} key={key}>
                                <div className="element_text"><p>{anime.titulo}</p></div>
                            </Link>
                        );
                    }) : null
                }
            </div>

            <div className='footer-logo'>
                <Link className='logo' to="/">
                    2017 - { new Date().getFullYear() }
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
    )}

export default Footer;