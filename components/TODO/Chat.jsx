import React from 'react'
import '../styles/components/Chat.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Chat extends React.Component {


    function closechat() {
        $(".chat_section").hide();
        $('.boton_chat').show();
      }
    
      function openchat() {
        $(".chat_section").show();
        $('.boton_chat').hide();
      }
    
      function sendmessage(){
        if ($(".toolbar .info_avatar .info_usuario .nombre").text() !== '' && 
        ($(".input_enviar").val() !== undefined || (".input_enviar").val() !== null 
        || (".input_enviar").val() !== '')) {
          let class_side = "";
          let item = "";
          let user = localStorage.getItem('user');
      
          let data = {
            "user": user, 
            "menssage": $(".input_enviar").val(),
            "receptor":$(".toolbar .info_avatar .info_usuario .nombre").text(),
            "action":"insertmessage"
          };
          api_ajax("Chat", false,data).then((resp) => {
            if (resp['status']['code'] === 200) {
              resp['data'].forEach(elem => {
                if (elem['emiitter'] === user && elem['receptor'] !== user) {
                  class_side = 'mymessague';
                } else {
                  class_side = 'message';
                }
                item =+ `<div class="item ${class_side}">${elem['message']}</div>`;
              });
              
              $(".lista_mensagues").append(item);;
              $(".lista_mensagues").show();
              $(".lista_mensagues p ").hide();
            } else openalert("d", resp['status']['message']);
          }).catch((error) => {
            openalert("d", error);
          });
        } else {
          openalert("d", "Escribe el mensage para enviar|||");
        }
      }
    
      function setcontact(){
        if ($(".list_users").css("display") === 'block') {
          $(".lista_mensagues").show();
          $(".box_text").show();
          $(".toolbar").show();
          $(".list_users").hide();
        } else {
          $(".lista_mensagues").hide();
          $(".box_text").hide();
          $(".toolbar").hide();
          $(".list_users").show();
        }
      }
    
      function selectcontact(event){
        $(".toolbar .info_avatar .info_usuario .estado").text($(event.children[1].children[1]).text());
        $(".toolbar .info_avatar .info_usuario .nombre").text($(event.children[1].children[0]).text());
        $(".toolbar .info_avatar .avatar img").attr("src", $(event.children[0].children[0]).attr("src"));
        let class_side = "";
        let item = "";
        let user = localStorage.getItem('user');
        let chat = reloadchat($(".toolbar .info_avatar .info_usuario .nombre").text());
        if (chat) {
          chat.forEach(elem => {
            if (elem['emiitter'] === user && elem['receptor'] !== user) {
              class_side = 'mymessague';
            } else {
              class_side = 'message';
            }
            item += `
            <div class="item">
              <div class='${class_side}'>
                ${elem['message']}
              </div>
            </div>`;
          });
          
          $(".lista_mensagues").append(item); 
        }
        
        $(".lista_mensagues").show();
        $(".box_text").show();
        $(".toolbar").show();
        $(".list_users").hide();
    
      }
    
      function reloadchat(receptor){
        let data = {
          "user": localStorage.getItem("user"), 
          "receptor":receptor,
          "action":"listmessages"
        };
        api_ajax("Chat", false,data).then((resp) => {
          if (resp['status']['code'] !== 200) openalert("d", resp['status']['message']);
          return resp['data'];
        }).catch((error) => {
          openalert("d", error);
        });
      }
      
    render() {
        return (
            <div class="chat">
                if(isset($v['list_users'])): ?>
                <div class="list_users">
                    <div class="toolkit" onclick='setcontact()'>
                        <div class="back">
                            <i class='fa fa-caret-left'></i>
                        </div>
                    </div>
                    foreach ($v['list_users'] as $key => $value) : ?>
                <div class="user">
                        <div class="info_avatar" onclick='selectcontact(this)'>
                            <div class="avatar">
                                <img src="<?= $value['avatar'] ?>" alt="" srcset="">
                        </div>
                                <div class="info_usuario">
                                    <p class='nombre'><?</p>
                                    <p class='estado'><?<?</p>
                                </div>
                            </div>
                        </div>
                        endforeach; ?>
        </div>
                    endif; ?>
    <div class="toolbar">
                        <div class="info_avatar" onclick='setcontact()'>
                            <div class="avatar">
                                <img src="<?= $v['avatar'] ?>" alt="" srcset="">
            </div>
                                <div class="info_usuario">
                                    <p class='nombre'><?</p>
                                    <p class='estado'>Prueba de chat</p>
                                </div>
                            </div>
                            <div class="btn_close" onclick='closechat()'><i class="fas fa-times"></i></div>
                        </div>

                        <div class="lista_mensagues">
                            if(isset($v['chat'])) : ?>
        foreach ($v['chat'] as $key => $value) : ?>
        <div class="item">
                                <div class="<?php echo $value['emiitter'] === $v['user'] && $value['receptor'] !== $v['user']   ? 'mymessague': 'message'?>">
                                    <?= $value['message'] ?>
            </div>
                            </div>
                            endforeach; ?>
        else: ?>
        <p>No hay mensages, seleciona otro contacto</p>
                            endif;?>
    </div>
                        <div class="box_text">
                            <input type="text" class='input_enviar' name="mensage" id="mensage" placeholder='Escribe aqui tu mensage'>
                                <button class='btn_enviar' onclick='sendmessage()'>
                                    <i class="fas fa-paper-plane"></i>
        </buttonc>
    </div>
                        </div>
        )
    }
}

export default Chat
