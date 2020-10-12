import React from 'react';
import '../styles/pages/Auth.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Auth extends React.Component {
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }

      $(document).ready(function () {

        var formulario = document.formulario_registro,
        elementos = formulario.elements;
    
          // Funcion que se ejecuta cuando el evento click es activado
    
    var validarInputs = function() {
      for (var i = 0; i < elementos.length; i++) {
        // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
          // Si es tipo texto, email o password vamos a comprobar que esten completados los input
          if (elementos[i].value.length == 0) {
            console.log('El campo ' + elementos[i].name + ' esta incompleto');
            elementos[i].className = elementos[i].className + " error";
            return false;
          } else {
            elementos[i].className = elementos[i].className.replace(" error", "");
          }
        }
      }
    
      // Comprobando que las contraseñas coincidan
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
          // Recorremos los radio button
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
            // Eliminamos la clase Error del radio button
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
            // Eliminamos la clase Error del checkbox
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
    
    
          // --- Eventos ---
          //formulario.addEventListener("submit", enviar);
          
          for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
              elementos[i].addEventListener("focus", focusInput);
              elementos[i].addEventListener("blur", blurInput);
            }
          }
    });
    
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
    
    render() {
        return (
            <div class="wrap">
    <div class="contenedor-formulario"zª>
        <h1><?=translate("Auth",'login_title') ?></h1>
        <form class="formulario" action="<?= $v['lang'] ?>/api&am=Auth" method="post" name='formulario_registro'>
            <input type="text" name="user" id="usuario" value='jorge' placeholder='Usuario' required
                pattern="[A-Za-z0-9]{4,12}" title="Usuario debe tener de 4 a 20 caracteres">
            <div class="concret">
                <input type="password" name="passwd" id="passwd" value='Karanlik123?' placeholder='Contraseña'
                    autocomplate required>
                <i class="far fa-eye" onclick='togglepassword()' style='display:none;'></i>
                <i class="fas fa-eye-slash" onclick='togglepassword()'></i>
            </div>
            <div class="input-group">
                <input type="hidden" name="action" value="Login">
                <input type="submit" class='submit' value="<?=translate("Auth",'login_title') ?>" id='btn-submit'>
            </div>
        </form>
    </div>


    <div class="contenedor-formulario">
        <h1><?=translate("Auth",'singup_tittle') ?></h1>
        <form class="formulario" action="<?= $v['lang'] ?>/api&am=Auth" method="post" name='formulario_registro'>
            <input type="text" name="user" id="usuario" value='jorge' placeholder='Usuario' required
                pattern="[A-Za-z0-9]{4,12}" title="Usuario debe tener de 4 a 20 caracteres">
            <input type="text" name="email" id="email" required placeholder='Correo Electronico'>
            <div class="concret">
                <input type="password" name="passwd" id="passwd" value='Karanlik123?' placeholder='Contraseña'
                    autocomplate required>
                <i class="far fa-eye" onclick='togglepassword()' style='display:none;'></i>
                <i class="fas fa-eye-slash" onclick='togglepassword()'></i>
            </div>

            <div class="input-group">
                <input type="hidden" name="action" value="Register">
                <input type="submit" class='submit' value="<?=translate("Auth",'singup_tittle') ?>" id='btn-submit'>
            </div>
        </form>
    </div>
</div>
        )
    }
}

export default Auth
