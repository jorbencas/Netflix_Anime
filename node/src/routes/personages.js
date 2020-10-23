//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');

router.get('/id/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT p.id, p.nombre, p.descripcion, " +
    " p.fecha_nacimiento, p.anime, p.fecha_muerte, p.anime, m.name, m.type, m.extension, a.siglas, a.idiomas " +
    " FROM personages AS p INNER JOIN animes AS a ON(a.id = p.anime) " +
    " INNER JOIN media AS m ON(p.id = m.personage) " +
    `WHERE p.id = '${req.params.id}' AND m.type = 'personages'`);
    if (rset.rows.length > 0) {
      let element = rset.rows[0];
      element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.id}/${element.name}.${element.extension}`;
      res.json(element);
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('/anime/:id', async function(req, res, next){
  try {
    const rset = await dbpool.query("SELECT p.id, p.nombre, p.descripcion, " +
    " p.anime, m.name, m.type, m.extension, a.siglas, a.idiomas " + 
    " FROM personages AS p " +
    " INNER JOIN animes as a ON a.id = p.anime " +
    " INNER JOIN media AS m ON m.personage = p.id " +
    `WHERE p.anime = '${req.params.id}' AND m.type = 'personages'`);
    if (rset.rows.length > 0) {
      rset.rows.forEach((element,i) => {
        element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.id}/${element.name}.${element.extension}`;
        rset.rows[i] = element;
      });
      res.json(rset.rows);
    }else return res.json({"data":null}); 
    
  } catch (err) {
    next(err);
  }
});

router.get('*', function(req, res){
  res.status(404).send('Error no existe la ruta especificada personages');
});

module.exports = router;