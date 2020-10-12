//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');

router.get('/:as', async function(req, res, next){
  try {
    let limit = req.params.as.split("_");
    const rset = await dbpool.query("SELECT DISTINCT ON(e.anime) e.id, a.titulo_es as anime_titulo_es," +
    " a.titulo_en as anime_titulo_en, a.titulo_va as anime_titulo_va," +
    " a.titulo_ca as anime_titulo_ca, e.titulo_es, e.titulo_en, e.titulo_va," +
    " e.titulo_ca, e.updated, e.created, a.siglas, m.name, m.extension, m.type, e.num" +
    " FROM animes as a, episodes as e LEFT JOIN media as m on(m.anime = e.anime) " +
    " WHERE a.id = e.anime AND m.type = 'banner' " +
    ` ORDER BY e.anime DESC OFFSET ${limit[0]} LIMIT ${limit[1]}`);
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
          element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      res.json({"data": rset.rows});
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('/', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT id FROM episodes ORDER BY random() OFFSET 0 LIMIT 1");
    if (rset.rows.length > 0) {
       res.json(rset.rows[0]);
    }else  res.json({"data":null});  
  } catch (err) {
    next(err);
  }
});

router.get('/id/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT e.id, e.titulo_es, e.titulo_en, e.titulo_va, " +
    " e.titulo_ca, a.siglas, e.anime, m.name, m.extension, m.type, e.num, a.idiomas, " +
    " a.titulo_es as anime_titulo_es, a.titulo_en as anime_titulo_en, " + 
    " a.titulo_va as anime_titulo_va, a.titulo_ca as anime_titulo_ca " + 
    " FROM animes AS a " +
    " INNER JOIN episodes as e ON a.id = e.anime " +
    " INNER JOIN media AS m ON m.anime = a.id " +
    `WHERE e.id = '${req.params.id}' AND m.type = 'episodes'`);
    if (rset.rows.length > 0) {
      let element = rset.rows[0];
      element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.idiomas}/${element.name}.${element.extension}`;
      const banner = await dbpool.query(`SELECT m.name, m.extension, m.type FROM media AS m WHERE m.anime = ${element.anime} `);
      let ban = banner.rows[0];
      element.poster = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${ban.type}/${ban.name}.${ban.extension}`;
      
      const prev = await dbpool.query(`SELECT id FROM episodes WHERE anime = ${element.anime} AND ( num = ( SELECT num FROM episodes WHERE id = '${parseInt(element.id) - 1}' ))`);
      element.prev = prev.rows.length > 0 ? prev.rows[0].id : null;

      const next = await dbpool.query(`SELECT id FROM episodes WHERE anime = ${element.anime} AND ( num = ( SELECT num FROM episodes WHERE id = '${parseInt(element.id) + 1}' ))`);
      element.next = next.rows.length > 0 ? next.rows[0].id : null;
      
      res.json(element);
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('/anime/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT o.id, o.nombre, o.descripcion, o.anime, m.name, " + 
    " m.extension, a.siglas, o.num, a.idiomas " +
    " FROM animes AS a " +
    " INNER JOIN openings as o ON a.id = o.anime " +
    " INNER JOIN media AS m ON m.anime = a.id " +
    `WHERE o.anime = '${req.params.id}' AND m.type = 'portada'`);
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`;
        rset.rows[i] = element;
      });
      res.json(rset.rows);
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('*', function(req, res){
  res.status(404).send('Error no existe la ruta especificada openings');
});

module.exports = router;