import React from 'react';
import '../styles/components/Personages.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Personages extends React.Component {







    $(document).ready(function(){
        let screenwidth = document.body.clientWidth;
        let left;
        let elem;
        if ($(".child .personage_list").length > 0) {
          //calcular el left de la imagenes diamante
            if (screenwidth > 800) {
                left = $(".child .personage_list").length > 50 ? -340 : -100;
            } else {
                left = $(".movil_child .personage_list").length > 50 ? -10 : 0;
            }
    
            if (screenwidth > 800) {
                elem =  ".child .personage_list";
            } else {
                elem =  ".movil_child .personage_list";
            }
            $(elem).each((indice,e) => {
                let i = indice + 1;
                if(i == 1){
                    $(e).css("left",left + "%");
                    detail($(e).attr("id"));
                }else{
                    if (screenwidth > 800) {
                        left = parseInt(left) + 25;
                    } else {
                        left = parseInt(left) + 16;
                    }
                   
                    $(e).css("left",left + "%");
                }
            });   
        }
    });
    
    function detail(id){
        api_ajax(`Personage&ap=${id}`).then((resp) => {
            if (resp['status']['code'] === 200) {
                let personages = resp['data'];
                $(".PersonageDetails").html(`<article class='modal' id="${personages['id']}" role="article">
                <div class="modal_container">
                    <div class="personage-modal first">
                        <img  class="image" src="${personages['src']}" alt="${personages['nombre']}">
                    </div>
                    <div class="personage-modal second">
                        <div class="row">
                            <p>${personages['descripcion']}</p>
                        </div>
                        <div class="row">
                            <p>${personages['fecha_nacimiento']}</p>
                            <p>${personages['fecha_muerte']}</p>
                        </div>
                    </div>
                </div>
                </article>`);
                
                $(".PersonageDetails").css("display",'inline-block'); 
            }
        }).catch((error) => {
            //req_fail(jqXHR, error);
            message = "<span class='messageupload'>ERROR! Archivo no valido.</span>";
            showMessage(message);
        });
    }
    
  
    


    
    render() {
        return (
            <?php if(isset($v['personage'])) : ?>
    <?php if (!isMaster()) : ?>
        <section class='container'>
            <div class="child">
                <?php foreach ($v['personage'] as $key => $anime):?>
                    <article onclick="detail(<?= $anime['id'] ?>)" id='<?= $anime['id'] ?>' class="personage_list item<?=$key +1?>">
                        <div class="img" style='background: url("<?= $anime['src']?>"); background-size: cover;'></div>
                        <div class="info"><?= $anime['nombre']?></div>
                    </article>
                <?php endforeach ;?> 
            </div>
        </section>   
        <section class='movil_container'>
            <div class="movil_child">
                <?php foreach ($v['personage'] as $key => $anime):?>
                    <article onclick="detail(<?= $anime['id'] ?>)" id='<?= $anime['id'] ?>' class="personage_list item<?=$key +1?>">
                        <div class="img" style='background: url("<?= $anime['src']?>"); background-size: cover;'></div>
                        <div class="info"><?= $anime['nombre']?></div>
                    </article>
                <?php endforeach ;?> 
            </div>
        </section>  

        <section class='PersonageDetails'> </section>
    <?php elseif (isMaster()) : ?>
        <table class="table" role='table'>
            <tbody class="table-tbody" role="tablist" id="idTableRankingBody">
            <?php foreach ($v['personage'] as $key => $char) : ?>
                <tr role="row" class="tbody-row" onclick="hrefedit(this)" data-href="<?=hrefMake("{$v['lang']}/Edit&id={$char['anime']}") ?>">
                    <td role="cell" class="tbody-cell"><i class='far fa-user'></i></td>
                    <td role="cell" class="tbody-cell"><?= $char['nombre'] ?> </td>
                </tr>         
            <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
<?php elseif(!isset($v['personage'])) : ?>
    <?=msg($v['error_msg'],"warning")?>
<?php endif; ?>
        )
    }
}

export default Personages
