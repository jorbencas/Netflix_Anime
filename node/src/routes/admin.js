//var mongoose = require('mongoose');
var router = require('express').Router();
//var passport = require('passport');
///var User = mongoose.model('User');
/* var auth = require('../auth');
 */
var dbpool = require('../db');
var fs = require('file-system');
 // run_backup.js
require('dotenv').config();
const execFile = require('child_process').execFile;
/* const date = new Date();
const current_date = `${date.getFullYear()}-${date.getMonth() +
	1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`;
const backup_file = `export_${current_date}`;
const backup_file_ext = `export_${current_date}.tar`;

let backup_script = `pg_dump --username=${process.env.DB_USER} ${process.env.DB_NAME}`;

var script = execFile(
  `./backup.sh`,
  [backup_script, backup_file, process.env.DB_PASSWORD],
  (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
    console.log('Backup complete!')
  }
); */

router.get('/', async function (req, res, next) {
 let tablas = ['personages','history','animes','media','searches',
 'config','users','chat','metadata','collections','atributtes',
 'openings','endings','episodes','news','cart','cartlines','reserve','comment'];
    res.status(202).json(tablas);
});

router.get('/backup', async function (req, res, next) {
  try {
    let tablas = ['personages','history','animes','media','searches',
    'config','users','chat','metadata','collections','atributtes',
    'openings','endings','episodes','comment'];

    let save_backup = "";
    let num = 0;
    let limit = 50;
    let max_num = limit;

    tablas.forEach( async (tabla,i) => {
      let path = `backup/${tabla}.sql`;
      const episodes = await dbpool.query(`SELECT * FROM ${tabla}`);
      let data = episodes.rows;
      data.forEach(element => {
        switch (element) {
          case 'animes':
            save_backup += `INSERT INTO animes(id, siglas, titulo_es, titulo_en, titulo_va, titulo_ca, sinopsis_es, sinopsis_en, sinopsis_va, sinopsis_ca, generes, idiomas, date_publication, date_finalization, state, tabla, temporada, valorations, views, downloads, created, updated) VALUES('${backup.id}', '${backup.siglas}',  '${backup.titulo_es}', '${backup.titulo_en}', '${backup.titulo_va}', '${backup.titulo_va}', '${backup.sinopsis_es}', '${backup.sinopsis_en}','${backup.sinopsis_va}', '${backup.sinopsis_ca}', '${backup.generes}',  '${backup.idiomas}', '${backup.date_publication}', '${backup.date_finalization}','${backup.state}', '${backup.kind}', '${backup.temporada}', '${backup.valorations}', '${backup.views}', '${backup.downloads}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'media':
            save_backup += `INSERT INTO media(id, type, name, extension, main, anime, opening, ending, episode, manga, personage, 'user', created, updated) VALUES('${backup.id}', '${backup.type}', '${backup.name}',  '${backup.extension}', '${backup.main}',  '${backup.anime}', '${backup.opening}', '${backup.ending}',  '${backup.episode}', '${backup.manga}', '${backup.personage}', '${backup.user}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'personages':
            save_backup += `INSERT INTO personages(id, nombre, descripcion, fecha_nacimiento, fecha_muerte, anime, created, updated) values('${backup.id}',  '${backup.nombre}', '${backup.descripcion}', '${backup.fecha_nacimiento}', '${backup.fecha_muerte}', '${backup.anime}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'comment':
            save_backup += `INSERT INTO comment(id, comment, fecha, hora, user, episode, anime, manga, created, updated) VALUES('${backup.id}', '${backup.comment}', '${backup.fecha}', '${backup.hora}', '${backup.user}', '${backup.episode}', '${backup.anime}', '${backup.manga}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'episodes':
            save_backup += `INSERT INTO episodes(id, titulo_es, titulo_en, titulo_va, titulo_ca, idiomas, anime, views, downloads, num, created, updated) VALUES('${backup.id}', '${backup.titulo_es}', '${backup.titulo_en}',  '${backup.titulo_va}', '${backup.titulo_ca}', '${backup.idiomas}',  '${backup.anime}', '${backup.views}', '${backup.downloads}', '${backup.num}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'users':
            save_backup += `INSERT INTO users ("user", nombre, apellidos, email, password, date_birthday, tipo, dni, activado, genere, created, updated) VALUES ('${backup.user}', '${backup.nombre}', '${backup.apellidos}', '${backup.email}','${backup.password}','${backup.date_birthday}', '${backup.tipo}', '${backup.dni}', '${backup.activado}', '${backup.genere}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'chat':
            save_backup += `INSERT INTO chat(id, "message", emiitter, receptor, date, hour) VALUES('${backup.id}', '${backup.message}', '${backup.emiitter}', '${backup.receptor}', '${backup.date}', '${backup.hour}'); \n`;
            break;
          case 'collections':
            save_backup += `INSERT INTO collections(id, name, "user", created, updated) VALUES('${backup.id}', '${backup.name}', '${backup.user}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'atributtes':
            save_backup += `INSERT INTO atributtes(id, "user", anime, opening, ending, episode, manga, personage, favorite, collection) VALUES('${backup.id}', '${backup.user}', '${backup.anime}', '${backup.opening}', '${backup.ending}', '${backup.episode}', '${backup.manga}', '${backup.personage}', '${backup.favorite}', '${backup.collection}'); \n`;
            break;
          case 'openings':
            save_backup += `INSERT INTO openings(id, nombre, descripcion, anime, num, created, updated) VALUES('${backup.id}', '${backup.nombre}', '${backup.descripcion}', '${backup.anime}', '${backup.num}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'endings':
            save_backup += `INSERT INTO endings(id, nombre, descripcion, anime, num, created, updated) VALUES('${backup.id}', '${backup.nombre}', '${backup.descripcion}', '${backup.anime}', '${backup.num}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'searches':
            save_backup += `INSERT INTO searches(id, search, kind, 'user', anime, created, updated) VALUES('${backup.id}', '${backup.search}', '${backup.kind}', '${backup.user}', '${backup.anime}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'config':
            save_backup += `INSERT INTO config(id, "user", theme, autoplay, columns, orden, ordenepi, lang, vol, default_view, avable_chat, avable_history, limit_elem_collection, created, updated) VALUES('${backup.id}', '${backup.user}', '${backup.theme}', '${backup.autoplay}', '${backup.columns}', '${backup.orden}', '${backup.ordenepi}', '${backup.lang}', '${backup.vol}', '${backup.default_view}', '${backup.avable_chat}', '${backup.avable_history}', '${backup.limit_elem_collection}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          case 'history':
            save_backup += `INSERT INTO history(id, episode_id, "user", created, updated) VALUES('${backup.id}', '${backup.episode_id}', '${backup.user}', '${backup.created}', '${backup.updated}'); \n`;
            break;
          //case 'news' # code... break;
          //case 'cart' # code... break;
          //case 'cartlines': # code... break;
          //case 'reserve': # code... break;
          //case 'metadata': # code... break;
        }
        console.log(save_backup);

        /* fs.access(path, fs.F_OK, (err) => {
          if (err){
            console.error(err);
            return res.json({ "data": err });
          } 
          else{ */
            /* if (i == max_num) {      
              if($num > 0 ){
                  path = `backup/${tabla}/${tabla}${num}.sql`;
              }else{
                  path = `backup/${tabla}/${tabla}.sql`;
              }
              if(!is_dir("backup")) mkdir("backup");
              if(!is_dir(`backup/${tabla}/`)) mkdir(`backup/${tabla}`);
              if(!file_exists($path)) file_put_contents($path, $save_backup);
              max_num = max_num + limit;
              num += num;
              save_backup = "";
            } else if($key == (count($result[$tabla]) - 1 ) && $max_num > $limit) {
              path = `backup/${tabla}/${tabla}${num}.sql`;
                if(!file_exists($path)) file_put_contents($path, $save_backup);
                save_backup = "";
            }else if($key == (count($result[$tabla]) - 1 ) && $max_num == $limit){
                if(!is_dir("backup")) mkdir("backup");
                if(!file_exists(path)) file_put_contents($path, $save_backup);
                save_backup = "";
            } */
            
            fs.writeFile('backup_new.sql', save_backup, function(err) {})
          /* }
        }) */
      });
    });
    
    

    /* fs.mkdir('1/2/3/4/5', [mode], function(err) {});
    fs.mkdirSync('1/2/3/4/5', [mode]); */
   

      return res.json({ "data": "OK" });
   
  } catch (err) {
    next(err);
  }

});

router.get('*', function (req, res) {
  res.status(404).send('Error no existe la ruta especificada anime');
});

module.exports = router;