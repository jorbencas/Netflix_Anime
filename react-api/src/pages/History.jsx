import React from 'react'
import '../styles/pages/History.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class History extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }

      function removeelement(id){
        let data = {"action":"deletelement", "id":id};
        api_ajax(`History`,false,data).then((resp) => {
            if (resp['status']['code'] === 200) {
                $(`#${id}`).remove();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div class="history">
    <div class="list">
    <?php foreach ($v['history'] as $episode): ?>
        <li class="lista" id="<?=$episode['id']?>">
            <a class="texto_line" href="<?=hrefMake("{$v['lang']}/EpisodesDetails&id=" . $episode['episode_id'])?>">
                <div class="img"
                    style='background: url("<?=$episode['src']?>"), var(--main-grey); background-repeat: no-repeat; background-position: right; background-size: cover;'>
                </div>
                <p class="texto">
                    <?=$episode["anime_titulo_{$v['c_lang']}"]?> -
                    <?=$episode["titulo_{$v['c_lang']}"]?>
                    <i class="fa fa-play"></i>
                </p>
            </a>
            <div class="info_avatar" onclick="removeelement(<?=$episode['id']?>)">
                <i class='fa fa-trash' style='font-size:20px;'></i>
            </div>
        </li>
    <?php endforeach;?>
    </div>
</div>
        )
    }
}

export default History