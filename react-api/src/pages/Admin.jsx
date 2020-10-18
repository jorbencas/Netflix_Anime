import React from 'react';
import axios from 'axios';
import '../styles/pages/Admin.css';
import 'font-awesome/css/font-awesome.min.css';

export class Admin extends React.Component {
    
    constructor() {
        super()
        this.state = {
            tables : []
        };
        this.handleadmin = this.handleadmin.bind(this);
    }
     /* 

    var lista = JSON.parse(lista_tablas);
var elem = document.getElementById("bar");
let percent = document.getElementById("percent");

function click_admin(params) {
  var width = 0;
  var timeout = setInterval(frame, 1000);
  let action = $(".tablinks.active").attr("id");
  if (action == "backup") {
    backup(params, action);
  } else if (action == "recover") {
    recover(params, action);
  }

  function frame() {
    if (width >= 100) {
      clearInterval(timeout);
    } else {
      if (width == 0 || width < 35) {
        if ($("#myProgress").hasClass("sucess")) {
          $("#myProgress").removeClass("sucess").addClass("error");
        } else {
          $("#myProgress").removeClass("start").addClass("error");
        }
      } else if (width >= 35 && width < 65) {
        $("#myProgress").removeClass("error").addClass("start");
      } else {
        $("#myProgress").removeClass("start").addClass("sucess");
      }
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width + "%";
    }
  }

  clearInterval(timeout);
  timeout = setInterval(frame, 10);
}

function recover(params,action) {
  let peticiones = lista.filter((e) => {
    if (e.tabla === params) return e;
  });
  peticiones.forEach((e, i) => {
    let data = {
      action: action,
      tabla: e.tabla,
      deleted: e.deleted,
      src: e.src,
    };

    if (e.deleted === false) {
      peticiones.forEach((e) => {
        if (e.tabla === params) e.deleted = true;
      });
    }

    api_ajax(`Admin`, false, data).then((resp) => {
      if (resp["status"]["code"] === 200) {
        if (i === peticiones.length - 1) $(`#${params}`).addClass("active");
      } else {
        $(`#${params}`).addClass("disabled");
      }
    }).catch( (error) => {
      $(`#${params}`).addClass("disabled");
    });
  });
}

function backup(params,action){
  let data = {
    action: action,
    tabla: params
  }; 
  api_ajax(`Admin`, false, data).then((resp) => {
    if (resp["status"]["code"] === 200) {
      $(`#${params}`).addClass("active");
    } else {
      $(`#${params}`).addClass("disabled");
    }
  }).catch( (error) => {
    $(`#${params}`).addClass("disabled");
  });
}

function setab(evt, disabled) {
  let active = $(".tablinks.active").attr("id");
  if (disabled !== active) {
    $("." + active).hide();
    $("." + disabled).show();
    if(disabled == "manage") {
      $(".list").css("height","750px");
      $(".importador").hide();
    }else{
      $(".list").css("height","665px");
      $(".importador").show();
    }
    if ($(".element.active") !== undefined) {
      $(`.element`).removeClass("active");
    } else if ($(".element.disabled") !== undefined) {
      $(`.element`).removeClass("disabled");
    }
    $("#" + active).removeClass("active");
    $(evt.currentTarget).addClass("active");
  }
}

 */
    componentDidMount() {
        axios.get(`http://localhost:3001/admin`)
            .then(res => {
                this.setState({ tables: res.data });
            });
    }

    handleadmin(){
        
    }

    render() {
        const buttons = this.state.tables.map( e => {
            return <div className="admin_element" id={e} onClick={ () => {this.handleadmin(`${e}`)}}>
                 <i className="fa fa-database"></i>
                <p>{e}</p>
             </div>}); 
        return (
            <div>
                { buttons }
            </div>
        )
    }
}

export default Admin;
