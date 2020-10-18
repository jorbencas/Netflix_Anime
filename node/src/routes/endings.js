//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');
router.get('/id/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT e.id, e.anime, e.nombre, e.descripcion, a.titulo_es as anime_titulo_es, " +
    " a.titulo_en as anime_titulo_en, a.titulo_va as anime_titulo_va, " +
    " a.titulo_ca as anime_titulo_ca, m.name, m.extension, a.siglas, e.num" + 
    " FROM endings AS e INNER JOIN animes AS a ON(a.id = e.anime) " +
    " INNER JOIN media AS m ON(e.id = m.opening) " +
    `WHERE e.id = '${req.params.id}' AND m.type = 'endings'`);
    if (rset.rows.length > 0) {
      let element = rset.rows[0];
      element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.idiomas}/${element.name}.${element.extension}`;
      const banner = await dbpool.query(`SELECT m.name, m.extension, m.type FROM media AS m WHERE m.anime = ${element.anime} `);
      let ban = banner.rows[0];
      element.poster = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${ban.type}/${ban.name}.${ban.extension}`;
      
      const prev = await dbpool.query(`SELECT id FROM endings WHERE anime = ${element.anime} AND ( num = ( SELECT num FROM endings WHERE id = '${parseInt(element.id) - 1}' ))`);
      element.prev = prev.rows.length > 0 ? prev.rows[0].id : null;

      const next = await dbpool.query(`SELECT id FROM endings WHERE anime = ${element.anime} AND ( num = ( SELECT num FROM endings WHERE id = '${parseInt(element.id) + 1}' ))`);
      element.next = next.rows.length > 0 ? next.rows[0].id : null;
      
      res.json(element);
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('/anime/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT e.id, e.nombre, e.descripcion, e.anime, m.name, " + 
    " m.extension, a.siglas, e.num, a.idiomas " +
    " FROM animes AS a " +
    " INNER JOIN endings AS e ON a.id = e.anime " +
    " INNER JOIN media AS m ON m.anime = a.id " +
    `WHERE e.anime = '${req.params.id}' AND m.type = 'portada'`);
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
  res.status(404).send('Error no existe la ruta especificada endings');
});

module.exports = router;