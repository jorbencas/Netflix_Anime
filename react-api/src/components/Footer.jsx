import React, { Component } from 'react'
import axios from 'axios';
import '../styles/components/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animes : [],
            date : new Date().getFullYear()
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/Animes`)
        .then(res => {
        this.setState({animes:res.data.data});
        });
    }

    render() {
        return (
            <footer>
                <div className="footer-list">
                    {
                        this.state.animes.map( anime => (
                            <a className='element_container' href={'/AnimeDetails/'+anime.id} key={anime.id}>
                                <div className="element_text"><p>{anime.titulo_es}</p></div>
                            </a>
                        ))
                    }
                </div>


                <div className='footer-logo'>
                    <a className='logo' href="/">
                        2017 - {this.state.date}
                    </a>
                    {/* <iframe width="300px" height="360px" scrolling="yes" frameborder="0" src="http://www.dailymotion.com/badge/user/kirito-kirigaya3?type=carousel"></iframe>
                    <ul className='contador'>
                    
                    </ul> */}
                    <div className="sidenav">
                        <a className='element' href='https://twitter.com/kirito123kazut2'>   
                            <span><i className='fab fa-twitter'></i></span>
                            <p>Twitter</p>     
                        </a>
                        <a className='element' href='https://www.facebook.com/profile.php?id=100004654665874&fref=ts'>
                            <span><i className='fab fa-facebook'></i></span>
                            <p>Facebook</p>        
                        </a>
                        <a className='element'  href='https://plus.google.com/u/0/'> 
                            <span><i className='fab fa-google-plus'></i></span>
                            <p>Google Plus</p>       
                        </a>
                        <a className='element' href='https://www.youtube.com/channel/UCRyM2yRz4eOKi3c66MOfx-Q'>  
                            <span><i className='fab fa-youtube'></i></span>
                            <p>Youtube</p>      
                        </a>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;



