const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require('morgan')('dev');
const routes = require('./routes');
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
app.use('/media', express.static('media'));
app.use(routes);
/* var dbpool = require('./db');

app.get('/episodes/getid', async function(req, res, next){
    try {
      const rset = await dbpool.query("SELECT id FROM episodes ORDER BY random() LIMIT 1");
      if (rset.rows.length > 0) {
        return res.json({"data": rset.rows});
      }else return res.json({"data":null}); 
      
    } catch (err) {
      next(err);
    }
  }); */

//config server
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
    console.log(`El servidor esta corriendo ${app.get('port')}`)
})