//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');

router.get('/', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});

router.get('/lastanimes', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT DISTINCT ON(e.anime) a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind, " +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type " +
    "FROM animes AS a INNER JOIN episodes AS e ON(e.anime = a.id) INNER JOIN media AS m ON(m.anime = a.id) " +
    "WHERE m.type = 'portada' ORDER BY e.anime DESC OFFSET 0 LIMIT 7");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});


router.get('/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});


router.get('/:as', async function(req, res, next){
  try {
    let limit = req.params.as.split("_");
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    `ORDER BY a.titulo_es ASC OFFSET ${limit[0]} LIMIT ${limit[1]}`);
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
          element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`;
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
  } catch (err) {
    next(err);
  }

});


router.get('/animes', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});


router.get('/animes', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});



router.get('/animes', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});



router.get('/animes', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
    "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
    "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
    "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
    "FROM animes AS a " +
    "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
    "INNER JOIN media AS m on m.anime = a.id " +
    "WHERE m.type = 'portada' "+ 
    "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }

});

/* 
function getlistanime($db, $select, $params = null){
 $sql = "SELECT $select, at.favorite
 FROM animes AS a 
 LEFT JOIN atributtes AS at ON(at.anime = a.id AND at.user = '{$params['user']}' ) 
 INNER JOIN media AS m on m.anime = a.id
 WHERE m.type = 'portada' ORDER BY a.created DESC";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res[0]->id)){
     foreach ($res as $key => $value) {
         $res[$key] = handleanime(get_object_vars($value));
     }
     $res = apiresp("api_Anime_msg", $res);
 }else{
     $res = apiresp("api_Anime_error_msg");
 }
 return $res;
}

function getslides($db, $select, $params){
 $limit = explode("_",$params['as']);
 $sql = "SELECT $select, at.favorite
 FROM animes AS a 
 LEFT JOIN atributtes AS at ON(at.anime = a.id)
 INNER JOIN media AS m on m.anime = a.id
 WHERE m.type = 'portada' 
 ORDER BY a.titulo_es ASC OFFSET $limit[0] LIMIT $limit[1]";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res)){
     foreach ($res as $key => $value) {
         $res[$key] = handleanime(get_object_vars($value));
     }
     $res = apiresp("api_Anime_slides_msg", $res);
 }else{
     $res = apiresp("api_Anime_slides_error_msg", $sql);
 }
 return $res;
};

function getone($db, $select, $params){
 $sql = "SELECT $select, at.favorite FROM animes AS a 
 LEFT JOIN atributtes AS at ON(at.anime = a.id)
 INNER JOIN media AS m on m.anime = a.id
 WHERE a.id = '{$params['ap']}' AND m.type = 'portada'";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res)){
     $anime = get_object_vars($res[0]);
     $sql = "SELECT m.name, m.extension, m.type FROM media AS m 
     WHERE m.anime = '{$anime['id']}' AND m.type = 'banner'";
     $res = $db->listar($db->ejecutar($sql));
     $banner = get_object_vars($res[0]);
     $anime["banner"] = handleMedia("banner", $banner['name'],$banner['extension'], $anime['siglas']);
     
     $sql = "SELECT count(m.episode) AS num FROM media AS m
     WHERE m.anime = '{$params['ap']}' AND m.type = 'episodes' GROUP BY m.type";
     $res = $db->listar($db->ejecutar($sql));
     $anime['num_epis'] = isset($res[0]) ? $res[0]->num : 0;

     $sql = "SELECT count(m.personage) AS num FROM media AS m
     WHERE m.anime = '{$params['ap']}' AND m.type = 'personages' GROUP BY m.type";
     $res = $db->listar($db->ejecutar($sql));
     $anime['num_pers'] = isset($res[0]) ? $res[0]->num : 0;
     
     $sql = "SELECT count(m.opening) AS num FROM media AS m
     WHERE m.anime = '{$params['ap']}' AND m.type = 'openings' GROUP BY m.type";
     $res = $db->listar($db->ejecutar($sql));
     $anime['num_opes'] = isset($res[0]) ? $res[0]->num : 0;

     $sql = "SELECT count(m.ending) AS num FROM media AS m
     WHERE m.anime = '{$params['ap']}' AND m.type = 'endings' GROUP BY m.type";
     $res = $db->listar($db->ejecutar($sql));
     $anime['num_ends'] = isset($res[0]) ? $res[0]->num : 0;

     $res = apiresp("api_Anime_One_msg", handleanime($anime));
 }else{
     $res = apiresp("api_Anime_One_error_msg");
 }
 return $res;
};

function lastidanime($db, $select){
 $sql = "SELECT MAX(id) as lastid FROM animes";
 $valor = $db->listar($db->ejecutar($sql));
 if(isset($valor[0]->lastid)){
     $valor = get_object_vars($valor[0]); 
     $res = apiresp("api_Anime_last_msg", $valor['lastid']);
 }else{
     $res = apiresp("api_Anime_last_error_msg");
 }
 return $res;
};

function lastanimes($db, $select){
 global $lang;
 $img = handleMedia('tema','no','jpg');
 $prueba = array();

 $sql = "SELECT $select
 FROM animes AS a INNER JOIN episodes AS e ON(e.anime = a.id)
 INNER JOIN media AS m ON(m.anime = a.id) 
 WHERE m.type = 'portada' 
 GROUP BY e.anime 
 ORDER BY e.created DESC
 LIMIT 0,7";
 $animes = $db->listar($db->ejecutar($sql));
 
 foreach ($animes as $key => $value) {
     $animes[$key] = handleanime(get_object_vars($value));
 }
 
 for ($i= 0; $i < 7; $i++) {
     $id = $i + 1;
     array_push($prueba,  array(
         'id' => $i < count($animes) ? $animes[$i]['id']:$i,
         'src' => $i < count($animes) ? $animes[$i]['src'] : $img, 
         'titulo' => $i < count($animes) ? $animes[$i]["titulo_{$lang}"] : "Entrada $id", 
     ));
 }

 if(count($prueba) > 0){
     $res = apiresp("api_Anime_lastanime_msg",$prueba);
 }else{
     $res = apiresp("api_Anime_lastanime_error_msg");
 }
 return $res;
};

function inserteditOneanime($db, $anime){
 $sql = "SELECT * FROM animes WHERE id = '{$anime['id']}' AND siglas = '{$anime['siglas']}'";
 $valor = $db->listar($db->ejecutar($sql));
 if(isset($valor[0]->id)){
     $date = date("Y-m-d H:i:s");
     $sql = "UPDATE animes set  
     siglas = '{$anime['siglas']}', titulo_es = '{$anime['titulo_es']}',
     titulo_en = '{$anime['titulo_en']}', titulo_va = '{$anime['titulo_va']}', 
     titulo_ca = '{$anime['titulo_va']}', sinopsis_es = '{$anime['sinopsis_es']}', 
     sinopsis_en = '{$anime['sinopsis_en']}', sinopsis_va = '{$anime['sinopsis_va']}', 
     sinopsis_ca = '{$anime['sinopsis_ca']}', generes = '{$anime['generes']}',  
     idiomas = '{$anime['idiomas']}', date_publication = '{$anime['date_publication']}', 
     date_finalization = '{$anime['date_finalization']}', state = '{$anime['state']}', 
     kind = '{$anime['kind']}', temporada = '{$anime['temporada']}', views = '{$anime['views']}', 
     valorations = '{$anime['valorations']}', 
     downloads ='{$anime['downloads']}', updated = '$date' WHERE id = '{$anime['id']}'";
     $updated = $db->ejecutar($sql);
     if(isset($updated)){
         $sql = "UPDATE atributtes SET favorite = '', collection = '', 
         WHERE anime = '{$anime['id']}' AND user = '{$_SESSION['auth']['user']}'";
         grabarlog("Anime actualizado", "Se ha actualizado el anime {$anime['siglas']}");
         $res = apiresp("api_Anime_update_msg", $sql);
     }else{
         $res = apiresp("api_Anime_update_error_msg");
     }
 }else{
     $sql = "INSERT INTO animes(id, siglas, titulo_es, 
     titulo_en, titulo_va, titulo_ca, sinopsis_es, sinopsis_en, 
     sinopsis_va, sinopsis_ca, generes, idiomas, date_publication, 
     date_finalization, state, kind, temporada, valorations, 
     views, downloads) VALUES('{$anime['id']}', '{$anime['siglas']}',  
     '{$anime['titulo_es']}', '{$anime['titulo_en']}', '{$anime['titulo_va']}', 
     '{$anime['titulo_va']}', '{$anime['sinopsis_es']}', '{$anime['sinopsis_en']}',
     '{$anime['sinopsis_va']}', '{$anime['sinopsis_ca']}', '{$anime['generes']}',  
     '{$anime['idiomas']}', '{$anime['date_publication']}', '{$anime['date_finalization']}',
     '{$anime['state']}', '{$anime['kind']}', '{$anime['temporada']}', '{$anime['valorations']}', 
     '{$anime['views']}', '{$anime['downloads']}' )";
     $inserted = $db->ejecutar($sql);
     if(isset($inserted)){
        grabarlog("Anime insertado", "Se ha insertado el anime {$anime['siglas']}");
         $res = apiresp("api_Anime_insert_msg",$sql);
     }else{
         $res = apiresp("api_Anime_insert_error_msg");
     }
 }
 return $res;
};

function deleteOneanime($db, $params){
 $data = api("Anime&ap={$params['id']}");
 $anime = $data['data'];
 $anime['action'] = 'deleteby';
 $anime['type'] = 'anime';
 $anime['kind'] = 'anime';
 $data = api("Upload",$anime);
 $params["action"] = "deletePersonagebyanime";
 $data = api("Personage",$params);
 $params["action"] = "deleteEpisodesbyanime";
 $data = api("Episodes",$params);
 $params["action"] = "deleteOpeningsbyanime";
 $data = api("Openings",$params);
 $params["action"] = "deleteEndingsbyanime";
 $data = api("Endings",$params);
 $params['action'] = "removecollectionbyanime";
 $data = api("Collections",$params);
 $params['action'] = "removecollectionbyanime";
 $data = api("Comments",$params);
 $sql = "DELETE FROM atributtes WHERE anime = '$idanime' AND user = '$iduser'";
 $db->ejecutar($sql);
 $sql = "DELETE FROM animes WHERE id = '{$params['id']}'";
 $db->ejecutar($sql);
 $res['data']['sql_media'] = $ok['sql'];
 $res['data']['sql_anime'] = $sql;
 $res['data'] = $ok;
 $res = apiresp("api_Anime_delete_msg", $res['data']);
 return $res;
};

function getfav($db, $select, $params = null){
 $iduser = $params['user'];
 $sql = "SELECT $select, at.favorite
 FROM animes AS a INNER JOIN media AS m on m.anime = a.id
 INNER JOIN atributtes AS at ON(a.id = at.anime)
 WHERE m.type = 'portada' AND at.user = '$iduser' AND at.favorite = true ";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res[0]->id)){
     foreach ($res as $key => $value) {
         $res[$key] = handleanime(get_object_vars($value));
     }
     $res = apiresp("api_Anime_favorite_msg", $res);
 }else{
     $res = apiresp("api_Anime_favorite_error_msg");
 }
 return $res;
};

function addFavorite($db, $params) {
 $idanime = $params['id'];
 $iduser = $params['user'];

 $sql = "SELECT * FROM atributtes WHERE user = '$iduser' AND anime = '$idanime'";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res[0]->id)){
     $sql = "UPDATE atributtes set favorite = true WHERE user = '$iduser' AND anime = '$idanime' ";
     $updated = $db->ejecutar($sql);
     if (isset($updated)){
         $res = apiresp("api_fav_insert_msg",'fas fa-heart');
     }else {
         $res = apiresp("api_fav_insert_error_msg");
     }
 }else{
     $sql = "INSERT INTO atributtes(user, anime, favorite) VALUES('$iduser','$idanime',true)";
     $inserted = $db->ejecutar($sql);
     if(isset($inserted)){
         $res = apiresp("api_fav_insert_msg",'fas fa-heart');
     }else {
         $res = apiresp("api_fav_insert_error_msg");
     }
 }
 return $res;
};

function removeFavorite($db, $params) {
 $idanime = $params['id'];
 $iduser = $params['user'];
 $sql = "SELECT * FROM atributtes WHERE user = '$iduser' AND anime = '$idanime' AND favorite = true";
 $res = $db->listar($db->ejecutar($sql));
 if(isset($res[0]->id)){
     $sql = "UPDATE atributtes set favorite = false WHERE user = '$iduser' AND anime = '$idanime'";
     $updated = $db->ejecutar($sql);
     if (isset($updated)){
         $res = apiresp("api_fav_remove_msg",'far fa-heart');
     }else {
         $res = apiresp("api_fav_remove_error_msg");
     }
 }else {
    $res = apiresp("api_fav_remove_error_msg");
 }
 return $res;
};
 */
module.exports = router;