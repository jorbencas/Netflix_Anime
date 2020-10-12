import React from 'react';
import '../styles/pages/Auth.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Collection extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            animes : []
        };
      }



      
function removeelement(id){
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

  function removeall(id){
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
  
    render() {
        return (
            <div class="collection">
    <div class="info">
        <div class="img" style='background: url("<?= $v['collection'][count($v['collection']) - 1 ]['src']?>"), var(--main-grey); background-repeat: no-repeat; background-position: right; background-size: cover;'></div>
        <h2 class="name"><?= $v['collection'][0]['titulo']?></h2>
        <div class="num"><?= count($v['collection']) ?> - <?= translate("anime_detail_list_episode") ?></div>
        <div class="info_avatar" onclick="removeall(<?=$v['collection'][0]['id']?>)">
            <i class='fa fa-trash' style='font-size:20px;'></i>
        </div>
        <div class="line"><hr></div>
        <div class="info_avatar">
            <div class="avatar">
                <img src="<?= $v['avatar'] ?>" alt="" srcset="">
            </div>
            <div class="info_usuario">
                <p class='nombre'><?= $v['usuario']?></p>
            </div>
        </div>
    </div>
    <div class="list">
        <ul class="toolbar">
            <a href='<?=hrefMake("{$v['lang']}/Anime&od=id") ?>' class="tablinks"> <i class="fas fa-sort-down"></i> </a>
            <a href='<?=hrefMake("{$v['lang']}/Anime&oa=id") ?>' class="tablinks"> <i class="fas fa-sort-up"></i> </a>
            <button class="tablinks active" onclick="setab(event, 'lista', true)"> <i class="fas fa-th"></i></button>
            <button class="tablinks" onclick="setab(event, 'grid', true)"> <i class="fas fa-bars"></i></button>
        </ul>
        <div class="input-episode" style='display:none;'><?= $v['collection'][0]['id'] ?></div>
        <?php foreach ($v['collection'] as $episode): ?>
          <li class="lista" id="<?=$episode['episode_id']?>">
            <a class="texto_line" href="<?=hrefMake("{$v['lang']}/EpisodesDetails&id=" . $episode['episode_id'])?>">
                <div class="img" style='background: url("<?=$episode['src']?>"), var(--main-grey); background-repeat: no-repeat; background-position: right; background-size: cover;'></div>
                <p class="texto">
                  <?=$episode["anime_titulo_{$v['c_lang']}"]?> - 
                  <?=$episode["titulo_{$v['c_lang']}"]?>
                  <i class="fa fa-play"></i>
                </p>
            </a>
            <div class="info_avatar" onclick="removeelement(<?=$episode['episode_id']?>)">
                    <i class='fa fa-trash' style='font-size:20px;'></i>
                </div>
          </li>
        <?php endforeach;?>
    </div>
</div>
        )
    }
}

export default Collection
