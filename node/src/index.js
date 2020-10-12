const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require('morgan')('dev');
const errorhandler = require('errorhandler');
require('dotenv').config();

//initialicing package
const app = express();
app.use(express.json());

// Middlewares
app.use(morgan);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorhandler());

//routes of api
app.use('/media', express.static('media'));
app.use('/admin', require('./routes/admin'));
app.use('/animes', require('./routes/animes'));
//app.use('/chat', require('./routes/chat'));
//app.use('/collections', require('./routes/collections'));
//app.use('/comments',require('./routes/comments'));
app.use('/endings', require('./routes/endings'));
app.use('/episodes', require('./routes/episodes'));
//app.use('/history', require('./routes/history'));
app.use('/openings', require('./routes/openings'));
//app.use('/personages', require('./routes/personages'));
//app.use('/upload',require('./routes/upload'));
//app.use('/users',require('./routes/users'));

app.get('/', (req, res) => { res.status(200).send('Api de cosas de anime') } );

app.get('/filters', function(req, res){
  let filters = {};
  filters['letters'] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];
  filters['years'] = ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let generes = ['Acción', 'Artes Marciales', 'Autos', 'Aventura', 'Colegial', 'Comedia',
      'Cosas de la vida', 'Dementia', 'Demonios', 'Deportes', 'Drama', 'Ecchi', 'Escolares', 'Fantasia',
      'Harem', 'Historico', 'Josei', 'Juegos', 'Magia', 'Mecha', 'Militar', 'Misterio', 'Musica',
      'Niños', 'Parodia', 'Policial', 'Psicológico', 'Romance', 'Samurai', 'Sci-fi', 'Seinen', 'Shoujo',
      'Shoujo ai', 'Shounen', 'Shounen ai', 'Sobrenatural', 'Space', 'Super Poderes', 'Suspense', 'Thriller',
      'Vampiros', 'Yaoi'];
  filters['languajes'] = ["Español", "Catalan", "Japones", "Latino", "Inglés"];
  filters['kinds'] = ['Todos', 'serie', 'pelicula', 'ova', 'ona'];
  filters['temporadas'] = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  filters['filters'] = [];
  filters['generes'] = [];
  let tittles = ["Genero", "Tipo", "Año", "Idioma", "Temporada"];
  let ids = ['g', 'k', 'y', 'i', 't'];

  tittles.forEach((e, i ) => {
    filters['filters'].push({"title": e});
    ids.forEach((id,j) => {
      if (i == j) {
        filters['filters'][j]["id"] = id;
        filters['filters'][j]["visible"] = false;
      }
    });
  });

  generes.forEach((e,i) => {
    filters['generes'].push({
      'filter':e,
      'avable': false
    });
  });
  res.status(202).json(filters);
});

app.get('*', function(req, res){
  res.status(404).send('what???');
});

app.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;
        return errors;
      }, {})
    });
  }
  return next(err);
});

//config server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log(`El servidor esta corriendo ${app.get('port')}`)
})