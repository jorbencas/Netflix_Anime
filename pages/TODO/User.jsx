import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  /* 
      $(document).ready(function(){
        let screenwidth = document.body.clientWidth;
        if(screenwidth <= 800){
          $(".configuration .datos").text("Dtos");
          $(".configuration .personage").text("Pers");
          $(".configuration .favorites").text("Fav");
          $(".configuration .comments").text("Comen");
        }
          var formulario = document.formulario_registro,
          elementos = formulario.elements;
      
          var validarInputs = function() {
              for (var i = 0; i < elementos.length; i++) {

                if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {

                  if (elementos[i].value.length == 0) {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + " error";
                    return false;
                  } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
                  }
                }
              }
            
              if (elementos.pass.value !== elementos.pass2.value) {
                elementos.pass.value = "";
                elementos.pass2.value = "";
                elementos.pass.className = elementos.pass.className + " error";
                elementos.pass2.className = elementos.pass2.className + " error";
              } else {
                elementos.pass.className = elementos.pass.className.replace(" error", "");
                elementos.pass2.className = elementos.pass2.className.replace(" error", "");
              }
            
              return true;
            };
            
            var validarRadios = function() {
              var opciones = document.getElementsByName('sexo'),
                resultado = false;
            
              for (var i = 0; i < elementos.length; i++) {
                if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
                  for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                      resultado = true;
                      break;
                    }
                  }
            
                  if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('El campo sexo esta incompleto');
                    return false;
                  } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                  }
                }
              }
            };
            
            var validarCheckbox = function() {
              var opciones = document.getElementsByName('terminos'),
                resultado = false;
            
              for (var i = 0; i < elementos.length; i++) {
                if (elementos[i].type == "checkbox") {
                  for (var o = 0; o < opciones.length; o++) {
                    if (opciones[o].checked) {
                      resultado = true;
                      break;
                    }
                  }
            
                  if (resultado == false) {
                    elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                    console.log('El campo checkbox esta incompleto');
                    return false;
                  } else {
                    elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                  }
                }
              }
            };
            
            var enviar = function(e) {
              if (!validarInputs()) {
                console.log('Falto validar los Input');
                e.preventDefault();
              } else if (!validarRadios()) {
                console.log('Falto validar los Radio Button');
                e.preventDefault();
              } else if (!validarCheckbox()) {
                console.log('Falto validar Checkbox');
                e.preventDefault();
              } else {
                console.log('Envia');
                e.preventDefault();
              }
            };
      
            var focusInput = function() {
              this.parentElement.children[1].className = "label active";
              this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
            };
            
            var blurInput = function() {
              if (this.value <= 0) {
                this.parentElement.children[1].className = "label";
                this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
              }
            };
            
            for (var i = 0; i < elementos.length; i++) {
              if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
                elementos[i].addEventListener("focus", focusInput);
                elementos[i].addEventListener("blur", blurInput);
              }
            }
      
      });
      
      
      function setab(evt, cityName){
          $(".tabcontent").hide();
          $(".tablinks").removeClass("active");
          $("#" + cityName).show();
          $(evt.currentTarget).addClass("active");
      }
      
      function updateuser(){
        let data = new FormData($("#datos .formulario")[0])
        api_ajax("User", true, data).then((resp) => {
          if (resp['status']['code'] === 200) {
            openalert("s", resp['status']['message']);
          } else openalert("d", resp['status']['message']);
        }).catch((error) => {
          openalert("d", error);
        });
      }
      
      function togglepassword() {
          if ($("input[type='password']").attr('value') !== '') {
              if ($("#passwd").attr('type') == 'text') {
                  $("#passwd").attr('type', 'password');
                  $(".fa-eye-slash").show();
                  $(".fa-eye").hide();
              } else {
                  $("#passwd").attr('type', 'text');
                  $(".fa-eye").show();
                  $(".fa-eye-slash").hide();
              }
          }
      }
      
      function removecollection(){
        let data = { 
            "action": 'removecollection', 
            "user":localStorage.getItem("user"),
            "id":$(".input-id").val() 
          };
          api_ajax("Collections", false,data).then( (data) => {
        
            if (resp['status']['code'] === 200) {
              openalert("s", resp['status']['message']);
              return resp['data'];
            } else openalert("d", resp['status']['message']);
          }).catch((error) => {
            openalert("d", error);
          });
      } */

  render() {
    return (
      <div class="user">
        {/*   <div class="banner">
        <div class="jumbotron">
            <img  class="banner_img" src="<?=handleMedia("usuario",$v['avatar'],"jpg")?>" alt="">
        </div>
    </div>
    <div class="information">
        <div class="ed-information">
            <div class="serie-header">
                <img  src=<?= $v['avatar'] ?> alt="<?= $v['usuario'] ?>">
                <div class="serie-header-data">
                    <h1 class="serie-header__title"><?=$v['usuario']?></h1>
                </div>
            </div>
        </div>
    </div>

    <ul class="tab">
        <button class="tablinks active datos" onclick="setab(event, 'datos')">
            <?=translate("User",'auth_data')?>
        </button>
        <button class="tablinks personage" onclick="setab(event, 'personage')">
            <?=translate("User",'auth_animes')?>
        </button>
        <button class="tablinks favorites" onclick="setab(event, 'favorites')">
            <?=translate("User",'auth_favorites')?>
        </button>
        <button class="tablinks" onclick="setab(event, 'config')">
            <?=translate("User",'auth_config')?>
        </button>
        <button class="tablinks" onclick="setab(event, 'history')">
            <?=translate("User",'auth_history')?>
        </button>
        <button class="tablinks comments" onclick="setab(event, 'comments')">
            <?=translate("User",'auth_comments')?>
        </button>
    </ul>
    
    <div id='datos' class="tabcontent" style='display:block;'>
        <div class="wrap">
            <div class="contenedor-formulario">
                <form class="formulario" id='form' action="<?= $v['lang'] ?>/User" method="post" name='formulario_registro' >
                    
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre' value='<?= $v['nombre'] ?>'>

                        <input type="text" name="apellidos" id="apellidos" placeholder='Apellidos' value='<?= $v['apellidos'] ?>'>
                    
                        <input type="email" name="email" id="email" placeholder='Correo Electronico' value='<?= $v['email'] ?>'>
                    
                        <input type="date" name="date_birthday" id="date_birthday" placeholder='Fecha de Cupleaños' value='<?= $v['date_birthday'] ?>'>
                    
                        <input type="text" name="dni" id="dni" placeholder='Dni' value='<?= $v['dni'] ?>'>

                        <input type="text" name="user" id="usuario" placeholder='Usuario' value='<?= $v['usuario'] ?>' readonly style='display:none'>
                      
                        
                        <input type="password" name="passwd" id="passwd" placeholder='Contraseña' value='<?= $v['password'] ?>'>
                        <label for="passwd" class='label'>: </label>
                        <i class="far fa-eye"  onclick='togglepassword()' style='display:none;'></i>
                        <i class="fas fa-eye-slash" onclick='togglepassword()' ></i>

                    <div class="input-group  radio">
                        <input type="radio" name="genere" id="hombre" <?=$v['genere'] == 'Hombre' ? 'checked' : ''?>  value="Hombre">
                        <label for="hombre" class='label'>Hombre</label>
                        <input type="radio" name="genere" id="mujer" <?=$v['genere'] == 'Mujer' ? 'checked' : ''?> value="Mujer">
                        <label for="mujer" class='label'>Mujer</label>
                     </div>
                    <!-- <div class="input-group checkbox">
                        <input type="checkbox" name="tipo" id="tipo" value="Hombre">
                        <label for="hombre">Tipo</label>
                    </div> -->
                    <div class="dropzone">
                        <?= render("Upload",$v['media']); ?>
                    </div>
                    <div class="input-group">
                        <input type='hidden' name='action' value='updateUser'>
                        <input type="button" class='submit' value="Actualizar" onclick='updateuser()' id='btn-submit'>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id='personage' class="tabcontent" style='display:none;'>
        <?=render('Collections')?>
    </div>
    <div id='favorites' class="tabcontent" style='display:none;'>
        if(isset($v['favorites'])) : ?>
            <?= render('Anime_Grid', $v['favorites'])?>
        else : ?>
            <?= msg($v['error_favorites_msg'])?>
        endif;?>
    </div>
    <div id='config' class="tabcontent" style='display:none;'>
        <?=render('Config')?>
    </div>
    <div id="history" class="tabcontent" style='display:none;'>
        <?= render("History") ?>
    </div>
    <div id='comments' class="tabcontent" style='display:none;'>
        <?= render('Comments')?>
    </div>*/}
      </div>
    );
  }
}

export default User;
