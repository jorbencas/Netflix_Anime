import React from 'react';
import '../styles/pages/Auth.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

class Auth extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            animes : []
        };
      }

/*       $(document).ready(function () {

        var formulario = document.formulario_registro,
        elementos = formulario.elements;
    
          // Funcion que se ejecuta cuando el evento click es activado
    
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
     */
    render() {
        return (
            <div class="wrap">
    <div class="contenedor-formulario">
        <h1>Login</h1>
        <div class="formulario" >
            <input type="text" name="user" id="usuario" value='jorge' placeholder='Usuario' required
                pattern="[A-Za-z0-9]{4,12}" title="Usuario debe tener de 4 a 20 caracteres" />
            <div class="concret">
                <input type="password" name="passwd" id="passwd" value='Karanlik123?' placeholder='Contraseña'
                    autocomplate required />
                <i class="far fa-eye" onclick='togglepassword()' style='display:none;'></i>
                <i class="fas fa-eye-slash" onclick='togglepassword()'></i>
            </div>
            <div class="input-group">
                <input type="submit" class='submit' value="lOGIN" id='btn-submit' />
            </div>
        </div>
    </div>


    <div class="contenedor-formulario">
        <h1>Registro</h1>
        <div class="formulario" >
            <input type="text" name="user" id="usuario" value='jorge' placeholder='Usuario' required
                pattern="[A-Za-z0-9]{4,12}" title="Usuario debe tener de 4 a 20 caracteres" />
            <input type="text" name="email" id="email" required placeholder='Correo Electronico' />
            <div class="concret">
                <input type="password" name="passwd" id="passwd" value='Karanlik123?' placeholder='Contraseña'
                    autocomplate required />
                <i class="fa fa-eye" onclick='togglepassword()' style='display:none;'></i>
                <i class="fa fa-eye-slash" onclick='togglepassword()'></i>
            </div>

            <div class="input-group">
                <input type="submit" class='submit' value="Registara-se" id='btn-submit' />
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default Auth
