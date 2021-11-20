import React from 'react';
import axios from 'axios';
import '../styles/components/Collections.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Collections extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        personages : [],
        id:0
    };
    this.rendergrid = this.rendergrid.bind(this);
    this.rendertabla = this.rendertabla.bind(this);
  }
  
  componentDidMount() {
    axios.get(`http://localhost:3001/personages/anime/${this.props.id}`)
    .then(res => {
        this.setState({ personages: res.data });
    });
}

/* 
    addelement(name){
        let data = { 
          "action": 'addelementcollection', 
          "name": $(" .collections .input_enviar").val() !== '' ? $(" .collections .input_enviar").val() : name,
          "user":$("#user").text(),
          "episode": $(" .collections .input-episode").val()
        };
        api_ajax("Collections", false,data).then((resp) => {
          if (resp['status']['code'] === 200) {
            openalert("s", resp['status']['message']);
            if(name ===  undefined){
              let elem = `<div class='input-group radio'>
                <input type='radio' id='${resp['data'][0]['id']}' checked  onclick='removeelement('${resp['data'][0]['id']}')' value='${resp['data'][0]['id']}'>
                <label for='${resp['data'][0]['id']}' class='label'>${resp['data'][0]['titulo']}</label>
                </div>`;
              $(".collections").append(elem);
            }else{
              $("#"+ resp['data'][0]["id"]).attr("checked",true);
              console.log("#"+ resp['data'][0]["id"]);
            }
            return resp['data'];
          } else openalert("d", resp['status']['message']);
        }).catch((error) => {
          openalert("d", error);
        });
      } */

      
    render() {
        return (
            <div class="collections">
{/* <?php if(isset($v['collections']) || isset($v['inputs'])) : ?>
    <?php if($v['modulo'] == 'User') : ?>
        <?php foreach($v['collections'] as $key => $comment ) : ?>
            <article class="grid-item">
                    <img class="image" src="<?=$comment['src'] ?>" alt="<?= $comment["titulo"] ?>">
                    <a href="<?= hrefMake("{$v['lang']}/Collection&id=" . $comment['id']) ?>"
                        class="overlay">
                        <i class="fa fa-play-circle"></i>
                    </a>
                    <p class="data"><?= $comment['num'] . ' ' . $comment["titulo"] ?></p>
                </article>
        <?php endforeach; ?>
    <?php else : ?>
        <?= $v['inputs']?>
    <?php endif;?>
<?php else : ?>
    <?= msg($v['error_collections_msg'])?>
<?php endif;?>

<?php if($v['modulo'] !== 'User') : ?>
    <form class='estado'>
        <input type="text" class="input_enviar" placeholder="Añade una nueva colección" />   
        <input style='display:none;' type="text" class="input-episode" value="<?= $v['episode']?>" />
        <div class='btn_enviar' onclick="addelement()">
            <i class="fas fa-paper-plane"></i>
        </div>
    </form>
<?php endif;?> */}
</div>

        )
    }
}

export default Collections
