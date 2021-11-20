import React from 'react';

import './Comments.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Comments extends React.Component {


/* 
    add(){
        let data = { 
           "action": 'insertcomment', 
           "comment": $(".estado .input_enviar").val(),
           "user":localStorage.getItem("user"),
           "episode":$(".input-episode").val() !== "" ? $(".input-episode").val() : null,
           "anime":$(".input-anime").val() !== "" ? $(".input-anime").val() : null,
           "manga":$(".input-manga").val() !== "" ? $(".input-manga").val() : null,
         };
         api_ajax("Comments", false,data).then((resp) => {
           if (resp['status']['code'] === 200) {
             let elements = '';
             resp['data'].forEach(element => {
               elements += `<li class="comentario">
                 <div class="info_avatar">
                     <div class="avatar">
                         <img src="${element['avatar']}" alt="${element['user']}">
                     </div>
                 </div>
                 <div class="line">
                   <p class="line_comment">${element['comment']}</p>
                     <div class="date">
                       <p class="">${element['fecha']}</p>
                       <p class="">${element['hora']}</p>
                     </div>
                 </div>
             </li>`});
      
             if ($(".commentarios .comentario").length == 0) {
               $(".wrapper").remove();
               let node = '.episode-page';
               if (modulo === 'User' ) node = '#comments';
               else if (modulo === 'AnimeDetails') node = 'main';
      
               $(node).append("<div class='commentarios'></div>");
             }else{
               $(".commentarios .comentario").remove();
             }
             $(".commentarios").append(elements);
             openalert("s", resp['status']['message']);
             return resp['data'];
           } else openalert("d", resp['status']['message']);
         }).catch( (error) => {
           openalert("d", error);
         });
      }
      
      remove(id){
       api_ajax("Comments", false, {"action": 'deleteOnecomment', "id": id, 'user':localStorage.getItem("user")}).then((resp) => {
         if (resp['status']['code'] === 200) {
           if (resp['data'].length > 0) {
             $(".commentarios .comentario").remove();
             let elements = '';
             resp['data'].forEach(element => {
               elements += `<li class="comentario">
                 <div class="info_avatar">
                     <div class="avatar">
                         <img src="${element['avatar']}" alt="${element['user']}">
                     </div>
                 </div>
                 <div class="line">
                   <p class="line_comment">${element['comment']}</p>
                     <div class="date">
                       <p class="">${element['fecha']}</p>
                       <p class="">${element['hora']}</p>
                     </div>
                 </div>
                 <div class="info_avatar" onclick="remove(${element['id']})">
                   <i class='fa fa-trash' style='font-size:20px;'></i>
               </div>
             </li>`});
             $(".commentarios").append(elements);
             openalert("s", resp['status']['message']);
           } else {
             $(".commentarios").remove();
             $("#comments").append(`
             <div class='wrapper'>
               <div class='mensajes'>
                 <div class='notification info $timeout'>
                   ${resp['status']['message']}
                 </div>
               </div>
             </div>`);
             $(".wrapper").show();
           }
           return resp['data'];
         } else openalert("d", resp['status']['message']);
       }).catch((error) => {
         openalert("d", error);
       });
      } */

      
    render() {
        return (
          <div className="p"></div>
           /*  <?php if(islogged()) : ?>
    <?php if ($v['modulo'] !== 'User') : ?>
        <div class="info_avatar">
            <div class="avatar">
                <img src="<?= $v['avatar'] ?>" alt="" srcset="">
            </div>
            <div class="info_usuario">
                <p class='nombre'><?= $v['usuario']?></p>
                <form class='estado'>
                    <input type="text" class="input_enviar" placeholder="Añadir comentario" />   
                    <input style='display:none;' type="text" class="input-episode" value="<?= $v['episode']?>" />
                    <input style='display:none;' type="text" class="input-anime" value="<?= $v['anime']?>" />   
                    <input style='display:none;' type="text" class="input-manga" value="<?= $v['manga']?>" />    
                    <div class='btn_enviar' onclick="add()">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                </form>
            </div>
        </div>
    <?php endif;?>

    <?php if(isset($v['comments'])) : ?>
        <ul class="commentarios">
        <?php foreach ($v['comments'] as $key => $comment) : ?>
            <li class="comentario">
                <div class="info_avatar">
                    <div class="avatar">
                        <img src="<?= $comment['avatar'] ?>" alt="<?= $comment['user']?>">
                    </div>
                </div>
                <div class="line">
                    <p class="line_comment"><?= $comment['comment']?></p>
                    <div class="date">
                        <p class=""><?= $comment['fecha']?></p>
                        <p class=""><?= $comment['hora']?></p>
                    </div>
                </div>
                <?php if ($v['modulo'] == 'User') : ?>
                    <div class="info_avatar" onclick="remove(<?=$comment['id']?>)">
                        <i class='fa fa-trash' style='font-size:20px;'></i>
                    </div>
                <?php endif;?>
            </li>
        <?php endforeach; ?>   
        </ul>
    <?php else : ?>
        <div class='wrapper'>
            <?= msg($v['error_msg'],"info") ?>
        </div>
    <?php endif;?>
<?php else : ?>
    <div class='wrapper'>
        <?= msg($v['error_msg'],"info") ?>
    </div>
<?php endif;?></ul> */
        )
    }
}

export default Comments
