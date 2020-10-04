//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');

router.get('/', async function (req, res, next) {
 let tablas = ['personages','history','animes','media','searches',
 'config','users','chat','metadata','collections','atributtes',
 'openings','endings','episodes','news','cart','cartlines','reserve','comment'];
    res.status(202).json(tablas);
});
/* 
router.get('/lastanimes', async function (req, res, next) {
  try {
    const rset = await dbpool.query("SELECT DISTINCT ON(e.anime) a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
      "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
      "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind, " +
      "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type " +
      "FROM animes AS a INNER JOIN episodes AS e ON(e.anime = a.id) INNER JOIN media AS m ON(m.anime = a.id) " +
      "WHERE m.type = 'portada' ORDER BY e.anime DESC OFFSET 0 LIMIT 7");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element, i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
        element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`;
        //}
        rset.rows[i] = element;
      });
      return res.json({ "data": rset.rows });
    } else return res.json({ "data": null });

  } catch (err) {
    next(err);
  }

}); */

router.get('*', function (req, res) {
  res.status(404).send('Error no existe la ruta especificada anime');
});

module.exports = router;