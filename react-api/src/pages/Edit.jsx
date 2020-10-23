import React from 'react';
import '../styles/pages/Edit.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
    }






/* 

    let page_mode;
let action; getmode();
let animesiglas = action == "update" ? $("#anime .wrap input[name='siglas']").val(): undefined;
let animeid = action == "update" ? $("#anime .wrap input[name='id']").val(): undefined;
let animeidiomas = action == "update" ? $("#anime .wrap input[name='idiomas']:checked").val(): undefined;
let screenwidth = document.body.clientWidth;
let diamant_element = screenwidth <= 800 ? ".movil_list .movil_child" : ".list .child";
let diamant = screenwidth <= 800 ? ".movil_list" : ".list";

$(document).ready(function(){
  if(screenwidth <= 800){
    $(".anime").text("Ani");
    $(".episodes").text("Epi");
    $(".personages").text("Pers");
    $(".openings").text("Op");
    $(".endings").text("Ed");
  }
});

inputchanges(e) {
  if (e.type == "checkbox" || e.type == "radio") {
    if (e.checked) $(e).attr("checked", true);
    else $(e).attr("checked", false);
  } else $(e).attr("value", e.value);
}

setvalorations(valoration){
  let star;
  $(geteditnode() + " .star-rating span").each((i,e) => {
    star = i <= valoration ? "fas fa-star" : "far fa-star";
    $("#"+e.id + " i").attr("class",star);
  });
  $(geteditnode() + " input[name*='valorations']").attr("value",valoration + 1);
}

setab(evt, cityName) {
  if (!evt.currentTarget.className.includes("active")) {
    $(".tabcontent").hide();
    $(".tablinks").removeClass("active");
    
    if (cityName !== 'anime' && 
    $("#" + cityName + ` ${diamant_element} .list_element`).length === 0) {
      $("#" + cityName + " .form_oculto .wrap input[class*='submit']:last").hide();
      if ($("#" + cityName + " > .list_element")[0] !== undefined) {
        $("#" + cityName + " > .list_element").each((i, e) => {
          $("#" + cityName + ` ${diamant_element} `).append(e);
        });
        $("#" + cityName + ` ${diamant}`).css("display", "flex");
        calculatediamantynimg(cityName);

        $("#" + cityName + " > .wrap").each((i, e) => {
          $("#" + cityName + " .forms").append(e);
        });

      } else {
        $("#" + cityName + " > .wrap input[class*='submit']:last").hide();
        $("#" + cityName + ` ${diamant}`).css("display", "none");
        if (action === 'update') action = "insert";
      }

      $("#" + cityName + " .forms .wrap:not(:first-child)").css("height", "0");
    }
    $("#" + cityName).show();
    $(evt.currentTarget).addClass("active");
  }
}

remove(id) {
  let res = getcallapi($(".tabcontent[style*='block']").attr("id"), "delete");
  api_ajax(res['mod'], false, { "action": `deleteOne${res['func']}`, "id": id }).then((resp) => {
    if (resp['status']['code'] === 200) {
      if (mod === "Anime") {
        location.href = `http://cosasdeanime.com?r=es/Edit`;
      } else {
        if ($(`.tabcontent[style*='block'] ${diamant_element} .list_element`).length > 0) {
          $(`.tabcontent[style*='block'] ${diamant_element} .list_element[elem='${id}']`).remove();
          $(`.tabcontent[style*='block'] .forms .list_element[elem='${id}']`).remove();
          $(`.tabcontent[style*='block'] .forms .list_element:last`).show();
        } else {
          $(`.tabcontent[style*='block'] ${diamant}`).hide();
          addform();
        }
      }
      return resp['data'];
    } else openalert("d", resp['status']['message']);
  }).catch((error) => {
    openalert("d", error);
  });
}

setstep() {
  $(".tabcontent").hide();
  $("#" + getstep()).remove();
  $(".steps .content:not([class*='active'])").first().addClass("active");
  $("#" + getstep() + ` ${diamant}`).hide();
  $("#" + getstep()).show();
  if (getstep() == 'all') handledata();
}

getstep() {
  let node = $(".steps .content[class*='active']").last().attr("class");
  let p = node.split(" ");
  return p[1];
}

setabform(event, cityName) {
  let elem = cityName.split("_");
  $(geteditnode() + `input[name*='${elem[0]}']`).hide();
  $(geteditnode() + "#" + elem[0] + " .tablink").removeClass("active");
  $(geteditnode() + "input[name*='" + cityName + "']").show();
  $(event.currentTarget).addClass("active");
}

addform() {
  $(".tabcontent[id!='anime'] .forms .wrap").css("height", "0");
  let res = getcallapi($(".tabcontent[style*='block']").attr("id"), "delete");
  let mod = res["mod"];
  api_ajax(mod + `&aq=lastid${res["func"]}`).then((resp) => {
    if (resp['status']['code'] === 200) {
      if (action === "update") $(".tabcontent[style*='block'] .form_oculto .wrap input[class*='submit']:last").hide();
      $(".tabcontent[style*='block'] .form_oculto .wrap").clone().appendTo($(".tabcontent[style*='block']"));
      $(geteditnode()).attr("id", parseInt(resp['data']) + 1);
      $(geteditnode() + " .formulario input[name='id']").attr("value", parseInt(resp['data']) + 1);
      if (action === 'update') action = "insert";
    } else openalert("d", resp['status']['message']);
  }).catch((error) => {
    openalert("d", error);
  });
}

geteditnode() {
  let tab = $(".tabcontent[style*='block']").attr("id");
  let item = " > .wrap ";
  let expand = $("#" + tab + " .forms > div:not([style*='height: 0px'])").attr("id");
  if (expand !== undefined) {
      item = " #" + expand + " ";
  }
  return "#" + tab + item;
}

getmode() {
  let searched = window.location.search.split("&");
  if (searched[1]) {
    page_mode = 'update';
    action = 'update';
  } else {
    action = 'insert';
    page_mode = "insert";
  }
}

handledata() {
  let data = {};
  let tab = page_mode === 'insert' ? getstep() : $(".tabcontent[style*='block']").attr("id");
  let res = getcallapi(tab, "insert");
  let mod = res["mod"];
  let height = res['height'];
  let generes;
  if (mod !== "all") {
    $(geteditnode() + " .formulario input[name!='undefined']").each((i, e) => {
      let clave = $(e).attr("name");
      let valor = e.value;
      if (clave != undefined) {
        if ((e.type == "checkbox" || e.type == "radio") && (e.checked === true || clave == "episode_idiomas")) {
          if (clave == "episode_idiomas") {
            clave = 'idiomas';
            valor = animeidiomas;
          } else if(clave == 'idiomas' && tab == 'anime'){
            animeidiomas = valor;
          } else if(clave == "generes"){
            if (generes !== undefined) valor = generes + "," + valor;
            generes = valor;
          }      
          data[clave] = valor; 
        } else if ((e.type !== "checkbox" && e.type !== "radio") || e.name == "favorites") {
          if(clave == 'siglas') animesiglas = valor;
          else if (tab == 'anime' && clave == 'id') animeid = valor;
          else if (clave == 'id') $(geteditnode()).attr('id', valor);
          else if (clave == 'nombre') $(geteditnode()).attr('tittle', valor);
          else if (clave == 'titulo_es') valor = valor.replace("'","`");
          else if(clave == 'sinopsis_es') valor = valor.replace("'","`");
          else if(clave == 'nombre') valor = valor.replace("'","`");
          else if(clave == 'descripcion') valor = valor.replace("'","`");
          
          valor = valor !== "" ? valor : null;
          data[clave] = valor;
        }
      }
    });
    if (validator(data, mod)) {
      if(mod !== 'Anime' && mod !== 'Personage')  {
        let node = $(geteditnode() + " tr img").attr("name");
        let name = node.split(".");
        let num = name[0];
        if(num.startsWith("0")) num = num.replace("0","");
        $(geteditnode() + " input[name*='num']").attr("value", num);
        data['num'] = num;
        $(geteditnode()).attr('tittle', num);
      }

      api_ajax(mod, false, data).then((resp) => {
        if (resp['status']['code'] === 200) {
          openalert("s", resp['status']['message']);
          if (action == 'insert') {
            if (mod == "Anime") setstep();
            else {
              let id = $(geteditnode()).attr('id');
              let nombre = $(geteditnode()).attr('tittle');
              let img = $(geteditnode() + " table tr:first-child img").attr('src');

              $(geteditnode() + " input.submit:first").show();
              if (page_mode === 'insert') {
                $(geteditnode() + " input.submit[value*='Insertar']").hide();
              } else {
                $(geteditnode() + " input.submit[value*='Insertar']").attr("value", "Actualizar");
                $(geteditnode() + " .input-group").prepend(`<input type='button' class='submit' onclick="remove(${id})" value='Eliminar'>`);
              }
  
              $(`.tabcontent[style*='block'] ${diamant_element}`).append(`
              <div class='list_element' elem='${id}'> 
                <div class="img" style='background: url("${img}"); background-size: cover;' ></div>
              <div class="info">${nombre}</div>  </div>`);
  
              $(".tabcontent[style*='block'] .forms").append($(geteditnode()));
              $(`.tabcontent[style*='block'] ${diamant}`).css("display", "flex");
  
              calculatediamantynimg();
              getmode();
  
              if (action == "update") $(`.tabcontent[style*='block'] ${diamant_element} .list_element:last-child`).attr("onclick", `expand(event.currentTarget, ${height})`);
            }
          }
          return resp['data'];
        } else openalert("d", resp['status']['message']); return null;
      }).catch((error) => {
        openalert("d", error);
      });
    }
  }else{
    $("a.detail").attr("href", `http://cosasdeanime.com?r=es/AnimeDetails&id=${animeid}`);
    $("a.edit").attr("href", `http://cosasdeanime.com?r=es/Edit&id=${animeid}`);
  }
}

validator(data, mod) {
  if (mod == 'Anime') {
    if (data['siglas'] === '' || data['siglas'] === null || data['siglas'] === undefined) {
      openalert("d", "Debes de introducir la siglas para poder añadir un anime");
      return false;
    } else if (data['titulo_es'] === '' || data['titulo_es'] === null || data['titulo_es'] === undefined) {
      openalert("d", "Debes de introducir el titulo en español para poder añadir un anime");
      return false;
    } else if (data['sinopsis_es'] === '' || data['sinopsis_es'] === null || data['sinopsis_es'] === undefined) {
      openalert("d", "Debes de introducir la sinopsis en español para poder añadir un anime");
      return false;
    } else {
      let media = $(geteditnode() + " tr img");
      if (media.length == 0) {
        openalert("d", "Debes de introducir algun fichero multimedia añadir un anime");
        return false;
      } else if(media.length > 3){
        openalert("d", "Debes de introducir solamente 2 ficheros uno de tipo banner y otro de tipo portada fichro multimedia añadir un anime");
        return false;
      } else {
        let first = $(geteditnode() + " td:first-child img").attr("type");
        let second = $(geteditnode() + " tr:nth-child(2) img").attr("type");

        if (first !== 'banner' && second !== 'banner') {
          openalert("d", "Debes de introducir una imagen de banner");
          return false;
        } else if (first !== 'portada' && second !== 'portada') {
          openalert("d", "Debes de introducir una imagen de portada");
          return false;
        } else return true;
      }
      return true;
    }
  } else if (mod == 'Personage') {
    if (data['nombre'] === '' || data['nombre'] === null || data['nombre'] === undefined) {
      openalert("d", "Debes de introducir todos los datos para poder añadir un personage");
      return false;
    } else if (data['descripcion'] === '' || data['descripcion'] === null || data['descripcion'] === undefined) {
      openalert("d", "Debes de introducir la descripción para poder añadir un personage");
      return false;
    } else {
      let media = $(geteditnode() + " tr:first-child img");
      if (!media) {
        openalert("d", "Debes de introducir la imagen del personage");
        return false;
      } else return true;
      return true;
    }
  } else if (mod == 'Episodes') {
    if (data['sinopsis_es'] === '' || data['sinopsis_es'] === null || data['sinopsis_es'] === undefined) {
      openalert("d", "Debes de introducir la sinopsis en español para poder añadir un episodio");
      return false;
    } else if (data['titulo_es'] === '' || data['titulo_es'] === null || data['titulo_es'] === undefined) {
      openalert("d", "Debes de introducir el titulo en español para poder añadir un episodio");
      return false;
    } else {
      let media = $(geteditnode() + " tr img");
      if (media.length === 0) {
        openalert("d", "Debes de introducir el fichero del episodio");
        return false;
      }else if(media.length > 1){
        openalert("d", "Debes de introducir solo un fichero del episodio");
        return false;
      } else return true;
      return true;
    }
  } else if (mod == 'Openings') {
    if (data['nombre'] === '' || data['nombre'] === null || data['nombre'] === undefined) {
      openalert("d", "Debes de introducir todos los datos para poder añadir un opening");
      return false;
    } else if (data['descripcion'] === '' || data['descripcion'] === null || data['descripcion'] === undefined) {
      openalert("d", "Debes de introducir la descripción para poder añadir un opening");
      return false;
    } else {
      let media = $(geteditnode() + " tr:first-child img");
      if (media.length === 0) {
        openalert("d", "Debes de introducir el fichero del opening");
        return false;
      } else if(media.length > 1){
        openalert("d", "Debes de introducir solo un fichero del opening");
        return false;
      } else return true;
      return true;
    }
  } else if (mod == 'Endings') {
    if (data['nombre'] === '' || data['nombre'] === null || data['nombre'] === undefined) {
      openalert("d", "Debes de introducir todos los datos para poder añadir un endings");
      return false;
    } else if (data['descripcion'] === '' || data['descripcion'] === null || data['descripcion'] === undefined) {
      openalert("d", "Debes de introducir la descripción para poder añadir un endings");
      return false;
    } else {
      let media = $(geteditnode() + " tr:first-child img");
      if (media.length === 0) {
        openalert("d", "Debes de introducir el fichero del ending");
        return false;
      } else if(media.length > 1){
        openalert("d", "Debes de introducir solo un fichero del ending");
        return false;
      } else return true;
      return true;
    }
  } else return true;
}

calculatediamantynimg(tab = null) {
  let left;
  let list_elem;
  if (tab) {
    if (screenwidth > 800) {
      left = $("#" + tab + `>  ${diamant_element} .list_element`).length > 50 ? -340 : -100;
    } else {
      left = $("#" + tab + `>  ${diamant_element} .list_element`).length > 50 ? -10 : 0;
    }
    list_elem = "#" + tab + `  ${diamant_element} .list_element`;
  } else {
    if (screenwidth > 800) {
      left = $(`.tabcontent[style*='block'] > ${diamant_element} .list_element`).length> 50 ? -340 : -100;
    } else {
      left = $(`.tabcontent[style*='block'] > ${diamant_element} .list_element`).length > 50 ? -10 : 0;
    }
    list_elem = `.tabcontent[style*='block'] ${diamant_element} .list_element`;
  }

  $(list_elem).each((indice, e) => {
    let i = indice + 1;
    if (i == 1) {
      $(e).css("left", left + "%");
    } else {
      if (screenwidth > 800) {
        left = parseInt(left) + 25;
      } else {
          left = parseInt(left) + 16;
      }
      $(e).css("left", left + "%");
    }
  });
}

expand(element, height) {
  let list = element.attributes.elem.nodeValue;
  if (parseInt($(`.tabcontent[style*='block'] > .forms > div[id='${list}']`).css("height")) < height) {
    $(".tabcontent[style*='block'] .forms .wrap").css("height", "0");
    $(`.tabcontent[style*='block'] > .forms > div[id='${list}']`).css("height", height + "px");
  }
}

getcallapi(tab, kind = null) {
  switch (tab) {
    case "anime":
      mod = "Anime";
      func = "anime";
      height = 0;
      break;
    case "personages":
      mod = "Personage";
      func = "personage";
      height = 701;
      break;
    case "episodes":
      mod = "Episodes";
      func = "episode";
      height = 901;
      break;
    case "openings":
      mod = "Openings";
      func = "opening";
      height = 701;
      break;
    case "endings":
      mod = "Endings";
      func = "ending";
      height = 701;
      break;
    default: mod = "all"; break;
  }

  return kind === 'delete' ? { "mod": mod, "func": func } : { "mod": mod, "height": height };
}

 */











    render() {
        return (
          <div className="p"></div>
            /* <?php if (isset($v['anime'])) : ?>
    <div class="toolbar">
        <ul class="tab">
            <button class="tablinks active anime" onclick="setab(event, 'anime')">
                <?=translate("Edit",'list_anime')?>
            </button>
            <button class="tablinks personages" onclick="setab(event, 'personages')">
                <?=translate("Edit",'anime_detail_list_character')?>
            </button>
            <button class="tablinks episodes" onclick="setab(event, 'episodes')">
                <?=translate("Edit",'anime_detail_list_episode')?>
            </button>
            <button class="tablinks openings" onclick="setab(event, 'openings')">
                <?=translate("Edit",'anime_detail_list_openings')?>
            </button>
            <button class="tablinks endings" onclick="setab(event, 'endings')">
                <?=translate("Edit",'anime_detail_list_endings')?>
            </button>
        </ul>
    </div>
<?php else: ?>
<section class="steps">
    <div class="content anime active">
        <article class='step'>
            <div class=""></div>
            <span class="">1</span>
            <div class=""></div>
        </article>
        <p><?=translate("Edit",'list_anime')?></p>
    </div>
    <div class="content personages">
        <article class='step'>
            <div class=""></div>
            <span class="">2</span>
            <div class=""></div>
        </article>
        <p><?=translate("Edit",'anime_detail_list_character')?></p>
    </div>
    <div class="content episodes">
        <article class='step'>
            <div class=" "></div>
            <span class="">3</span>
            <div class=" "></div>
        </article>
        <p><?=translate("Edit",'anime_detail_list_episode')?></p>
    </div>
    <div class="content openings">
        <article class='step'>
            <div class=""></div>
            <span class="">4</span>
            <div class=" "></div>
        </article>
       <p><?=translate("Edit",'anime_detail_list_openings')?></p> 
    </div>
    <div class="content endings">
        <article class='step'>
            <div class=""></div>
            <span>5</span>
            <div class=""></div>
        </article>
        <p><?=translate("Edit",'anime_detail_list_endings')?></p>
    </div>
    <div class="content all">
        <article class='step'>
            <div class=""></div>
            <span>A</span>
            <div class=""></div>
        </article>
        <p><?=translate("Edit",'end')?></p>
    </div>
</section>
<?php endif; ?>

<div id='anime' class="tabcontent" style='display:block;'>
   <?= render('Edit_Anime', $v['anime']); ?>
</div>
<div id='personages' class="tabcontent" style='display:none;'>
    <div class="form_oculto"><?= render('Edit_Personages', $v['personage']); ?></div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['personage'])) : ?>
        <?php foreach ($v['personage'] as $key => $personage) : ?>
            <div class="list_element" elem='<?=$personage['id'] ?>' onclick="expand(event.currentTarget, 701)">
                <div class="img"  style='background: url("<?= $personage['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $personage['nombre'] ?></div>
            </div>
            <?= render('Edit_Personages', $personage); ?>
        <?php endforeach; ?>   
    <?php else : ?>
        <?= render('Edit_Personages', $v['personage']); ?>
    <?php endif; ?>   
</div>
<div id='episodes' class="tabcontent" style='display:none;'>
    <div class="form_oculto"><?= render('Edit_Episodes', $v['episode']); ?></div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['episode'])) : ?>
        <?php foreach ($v['episode'] as $key => $episode) : ?>
            <div class="list_element" elem='<?=$episode['id'] ?>' onclick="expand(event.currentTarget, 901)">
                <div class="img" style='background: url("<?= $episode['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $episode['num'] ?></div>
            </div>
            <?= render('Edit_Episodes', $episode); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= render('Edit_Episodes', $v['episode']); ?>
    <?php endif; ?> 
</div>
<div id='openings' class="tabcontent" style='display:none;'>
    <div class="form_oculto"><?= render('Edit_Openings', $v['opening']); ?> </div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['opening'])) : ?>
        <?php foreach ($v['opening'] as $key => $opening) : ?>
            <div class="list_element" elem='<?=$opening['id'] ?>' onclick="expand(event.currentTarget, 701)">
                <div class="img" style='background: url("<?= $opening['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $opening['num'] ?></div>
            </div>
            <?= render('Edit_Openings', $opening); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= render('Edit_Openings', $v['opening']); ?>
    <?php endif; ?> 
</div>
<div id='endings' class="tabcontent" style='display:none;'>
    <div class="form_oculto"><?= render('Edit_Endings', $v['ending']); ?></div>
    <div class="list"><div class="child"></div></div>
    <div class="movil_list"><div class="movil_child"></div></div>
    <div class="forms"></div>
    <?php if (isset($v['ending'])) : ?>
        <?php foreach ($v['ending'] as $key => $ending) : ?>
            <div class="list_element" elem='<?=$ending['id'] ?>' onclick="expand(event.currentTarget, 701)">
                <div class="img" style='background: url("<?= $ending['src']?>"); background-size: cover;' ></div>
                <div class="info"><?= $ending['num'] ?></div>
            </div>
            <?= render('Edit_Endings', $ending); ?>
        <?php endforeach; ?>
    <?php else : ?>
        <?= render('Edit_Endings', $v['ending']); ?>
    <?php endif; ?> 
</div>
<div id="all" class='tabcontent all' style='display:none;'>
    <a class="link detail">Ver</a>
    <a class="link edit">Editar</a>
</div> */
        )
    }
}

export default Edit
