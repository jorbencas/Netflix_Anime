//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');

router.get('/', async function (req, res, next) {
  try {
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
      "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
      "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
      "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
      "FROM animes AS a " +
      "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
      "INNER JOIN media AS m on m.anime = a.id " +
      "WHERE m.type = 'portada' " +
      "ORDER BY a.titulo_es ASC");
    if (rset.rows.length > 0) {
      rset.rows.forEach((element, i) => {
        //if (fs.existsSync(`${process.env.MEDIA_PATH}/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`)) {
        element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({ "data": rset.rows });
    } else return res.json({ "data": null });

  } catch (err) {
    next(err);
  }

});

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
        element.src = /*fs.readFile(*/`${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`/*)*/;
        //}
        rset.rows[i] = element;
      });
      return res.json({ "data": rset.rows });
    } else return res.json({ "data": null });

  } catch (err) {
    next(err);
  }

});

router.get('/id/:id', async function (req, res, next) {
  try {
    const animes = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
      "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
      "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
      "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
      "FROM animes AS a " +
      "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
      "INNER JOIN media AS m on m.anime = a.id " +
      `WHERE a.id = ${req.params.id} AND m.type = 'portada'` +
      "ORDER BY a.titulo_es ASC");
    if (animes.rows.length > 0) {
      let element = animes.rows[0];
        element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`;
        element.banner = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/banner/${element.name}.${element.extension}`;

        const episodes = await dbpool.query("SELECT DISTINCT ON(m.type) count(m.episode) AS num FROM media AS m " +
        `WHERE m.anime = '${element.id}' AND m.type = 'episodes' GROUP BY m.type`);
        element.num_epis = episodes.rows.length > 0 ? episodes.rows[0].num : 0;
        
        const personages = await dbpool.query("SELECT DISTINCT ON(m.type) count(m.personage) AS num FROM media AS m " +
        `WHERE m.anime = '${element.id}' AND m.type = 'personages' GROUP BY m.type`);
        element.num_pers = personages.rows.length > 0  ? personages.rows[0].num : 0;
        
        const openings = await dbpool.query("SELECT DISTINCT ON(m.type) count(m.opening) AS num FROM media AS m " +
        `WHERE m.anime = '${element.id}' AND m.type = 'openings' GROUP BY m.type`);
        element.num_opes = openings.rows.length > 0  ? openings.rows[0].num : 0;

        const endings = await dbpool.query("SELECT DISTINCT ON(m.type) count(m.ending) AS num FROM media AS m " +
        `WHERE m.anime = '${element.id}' AND m.type = 'endings' GROUP BY m.type`);
        element.num_ends = endings.rows.length > 0  ? endings.rows[0].num : 0;
      return res.json(element);
    } else return res.json({ "data": null });

  } catch (err) {
    next(err);
  }

});


router.get('/as/:as', async function (req, res, next) {
  try {
    let limit = req.params.as.split("_");
    const rset = await dbpool.query("SELECT a.id, a.kind, a.valorations, a.generes, a.sinopsis_es, a.temporada, " +
      "a.sinopsis_en, a.sinopsis_va, a.sinopsis_ca, a.titulo_es, a.titulo_en, " +
      "a.titulo_va, a.titulo_ca, a.siglas, a.state, a.idiomas, a.kind," +
      "a.date_publication, a.date_finalization, a.created, m.name, m.extension, m.type, at.favorite " +
      "FROM animes AS a " +
      "LEFT JOIN atributtes AS at ON(at.anime = a.id) " +
      "INNER JOIN media AS m on m.anime = a.id " +
      "WHERE m.type = 'portada' " +
      `ORDER BY a.titulo_es ASC OFFSET ${limit[0]} LIMIT ${limit[1]}`);
    if (rset.rows.length > 0) {
      rset.rows.forEach((element, i) => {
        element.src = `${process.env.MEDIA_PATH}/media/animes/${element.siglas}/${element.type}/${element.name}.${element.extension}`;
        rset.rows[i] = element;
      });
      return res.json({ "data": rset.rows });
    } else return res.json({ "data": null });
  } catch (err) {
    next(err);
  }
});

router.get('*', function (req, res) {
  res.status(404).send('Error no existe la ruta especificada anime');
});


router.post('/handleanime', async function (req, res, next) {
  const elem = await dbpool.query(`SELECT * FROM animes WHERE id = '${req.body.id}' AND siglas = '${req.body.siglas}'`);
  if (elem[0].id !== undefined) {
    //$date = date("Y-m-d H:i:s");
    await dbpool.query(`UPDATE animes set ` +
    ` siglas = '${req.body.siglas}', titulo_es = '${req.body.titulo_es}',` +
    ` titulo_en = '${req.body.titulo_en}', titulo_va = '${req.body.titulo_va}', ` +
    ` titulo_ca = '${req.body.titulo_va}', sinopsis_es = '${req.body.sinopsis_es}', ` +
    ` sinopsis_en = '${req.body.sinopsis_en}', sinopsis_va = '${req.body.sinopsis_va}', ` +
    ` sinopsis_ca = '${req.body.sinopsis_ca}', generes = '${req.body.generes}',  ` +
    ` idiomas = '${req.body.idiomas}', date_publication = '${req.body.date_publication}', ` +
    ` date_finalization = '${req.body.date_finalization}', state = '${req.body.state}', ` +
    ` kind = '${req.body.kind}', temporada = '${req.body.temporada}', views = '${req.body.views}', valorations = '${req.body.valorations}',` +
    ` downloads = '${req.body.downloads}', updated = '$date' WHERE id = ${req.body.id}`);
            
    await dbpool.query(`UPDATE atributtes SET favorite = '', collection = '', WHERE anime = '${req.body.id}' AND user = '${req.body.user}'`);
              
  }else{
    await dbpool.query(`INSERT INTO animes(id, siglas, titulo_es, ` +
      ` titulo_en, titulo_va, titulo_ca, sinopsis_es, sinopsis_en, ` +
      ` sinopsis_va, sinopsis_ca, generes, idiomas, date_publication, ` +
      ` date_finalization, state, kind, temporada, valorations, ` +
      ` views, downloads) VALUES('${req.body.id}', '${req.body.siglas}',  ` +
      ` '${req.body.titulo_es}', '${req.body.titulo_en}', '${req.body.titulo_va}', ` +
      ` '${req.body.titulo_va}', '${req.body.sinopsis_es}', '${req.body.sinopsis_en}',` +
      ` '${req.body.sinopsis_va}', '${req.body.sinopsis_ca}', '${req.body.generes}',  ` +
      ` '${req.body.idiomas}', '${req.body.date_publication}', '${req.body.date_finalization}',` +
      ` '${req.body.state}', '${req.body.kind}', '${req.body.temporada}', '${req.body.valorations}', ` +
      ` '${req.body.views}', '${req.body.downloads}')`);
      
  }

});
module.exports = router;