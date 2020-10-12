import React from 'react';
import axios from 'axios';
import '../styles/components/Buscador.css';
import 'font-awesome/css/font-awesome.min.css';

export class Buscador extends React.Component {







    var timeout;

function search(event){
  if(event.value.length < 3 ){
    $(".lista_resultados").html(`<div class='wrapper'>
    <p>El termino de busqueda debede contener al menos 3 caracteres</p>
    </div>`);
  }else if(event.value.length > 0 ) {
    let user =  $("#user").text().length > 0 ? $("#user").text() : null;
    let data = {"action":"search","search":event.value, "kind":"letters"/*active*/, "user":user};
    clearTimeout(timeout);
    timeout = setTimeout(() => { request_search(data) }, 500);
  }else{
    $(".lista_resultados .animes").html("<!-- -->");
  }
}

function request_search(data){
  api_ajax(`Buscador&aq=search`,false,data)
  .then((resp) => {
      if (resp['status']['code'] === 200) {
        let results = '<div class="animes">';
        if (Array.isArray(resp['data']) || resp['data'] !== null) {
          resp['data'].forEach(element => {
          results += ` 
            <a href='http://cosasdeanime.com?r=es/AnimeDetails&id=${element["id"]}' class='animes_element' id='${element["id"]}'>
              <div class='img'>
                  <img  src='${element["portada"]}' >
              </div>
              <div class='info'>
                  <h3> ${element["titulo_es"]} </h3>
                  <p> ${element["sinopsis_es"]} </p>
              </div>
            </a>`;
          });
          results += '</div>';
          $(".lista_resultados").html(results);
        }else{
          let erresult = `
            <div class='wrapper'>
              <h1>No se han encontrado ${active} que coincidan con el termino:  ${termino} </h1>
            </div>`;
          $(".lista_resultados").html(erresult);
        }
      }else{
        let erresult = `
          <div class='wrapper'>
            <h1>${resp['status']['message']}</h1>
          </div>`;
        $(".lista_resultados").html(erresult);
      }
      $(".lista_resultados").show();
    }).catch((error) => {
        console.log(error);
        //openalert('danger',resp['status']['text']);
       let erresult = `
       <div class='wrapper'>
         <h1>${resp['status']['message']}</h1>
       </div>`;
       $(".lista_resultados").html(erresult);
       $(".lista_resultados").show();
  });
}

    render() {
        return (
            <div class="search_contenent">
    <form>
        <input type="text" class="form-control" placeholder="Buscar" onkeyup="search(this)" />   
        <div class='search_icon'> <i class="fa fa-search"></i></div>
    </form>
    <div class="lista_resultados"></div>
</div>

        )
    }
}

export default Buscador
