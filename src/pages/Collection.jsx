import React from 'react';
import '../styles/pages/Auth.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Collection extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            collection : {}
        };
        this.ordenar = this.ordenar.bind(this);
      }

      ordenar(tipo){

        if (tipo == 'ascendente') {
          this.setState();
        } else if(tipo == 'descendente'){
          this.setState();
        }


      }

/*       
removeelement(id){
    let data = { 
      "action": 'removeelementcollection', 
      "user":localStorage.getItem("user"),
      "id":$(".input-episode").text(),
      "episode": id 
    };
    api_ajax("Collections", false,data).then((resp) => {
      if (resp['status']['code'] === 200) {
        openalert("s", resp['status']['message']);
        $("#"+ resp['data'][0]["episode_id"]).remove();
        console.log("#"+ resp['data'][0]["episode_id"]);
        
        return resp['data'];
      } else openalert("d", resp['status']['message']);
    }).catch( (error) => {
      openalert("d", error);
    });
  }

  removeall(id){
    let data = { 
        "action": 'removecollection', 
        "user":localStorage.getItem("user"),
        "id":id
      };
      api_ajax("Collections", false,data).then((resp) => {
        if (resp['status']['code'] === 200) {
          openalert("s", resp['status']['message']);
         location.href = 'http://cosasdeanime.com?r=es/User';
          return resp['data'];
        } else openalert("d", resp['status']['message']);
      }).catch((error) => {
        openalert("d", error);
      });
  }
   */
    render() {
        return (
            <div class="collection">
    <div class="info">
        <div class="img" style={{  
                            backgroundImage: "url(" + this.state.collection.src + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }}></div>
        <h2 class="name">{this.state.collection.titulo}</h2>
        <div class="num">{this.state.collection.count} - Detalle </div>
        <div class="info_avatar" onclick="removeall(this.state.collection.id})">
            <i class='fa fa-trash' style='font-size:20px;'></i>
        </div>
        <div class="line"><hr/></div>
        <div class="info_avatar">
            <div class="avatar">
                <img src={this.state.collection.avatar} alt="" srcset="" />
            </div>
            <div class="info_usuario">
                <p class='nombre'>{this.state.collection.user}</p>
            </div>
        </div>
    </div>
    <div class="list">
        <ul class="toolbar">
            <div onClick={ () => {this.ordenar('descandente')}} class="tablinks"> <i class="fa fa-sort-down"></i> </div>
            <div onClick={ () => {this.ordenar('ascendente')}} class="tablinks"> <i class="fa fa-sort-up"></i> </div>
            <button class="tablinks active" onclick="setab(event, 'lista', true)"> <i class="fas fa-th"></i></button>
            <button class="tablinks" onclick="setab(event, 'grid', true)"> <i class="fas fa-bars"></i></button>
        </ul>
        <div class="input-episode" style='display:none;'>{this.state.collection.id}</div>
        { this.state.collection.list.map( episodes => (
          <li class="lista" key={episodes.id}>
            <Link class="texto_line" to={'/EpisodesDetails/' + episodes.episode_id} >
                <div class="img" style={{  
                            backgroundImage: "url(" + this.state.collection.src + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }}></div>
                <p class="texto">
                  {episodes.anime_titulo_es} - {episodes.titulo_es}
                  <i class="fa fa-play"></i>
                </p>
            </Link>
            <div class="info_avatar" onclick="removeelement({episodes.episode_id})">
                    <i class='fa fa-trash' style='font-size:20px;'></i>
                </div>
          </li>
        ))}
    </div>
</div>
        )
    }
}

export default Collection
