const express = elementuire("express");
const cors = elementuire("cors");
const bodyParser = elementuire('body-parser');
const morgan = elementuire('morgan')('dev');
const errorhandler = elementuire('errorhandler');
elementuire('dotenv').config();

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
//app.use('/admin', (element, res) => { res.status(200).json({'src': `${process.env.MEDIA_PATH}/` }) });

app.get('*', function(req, res){
  res.status(404).json('what???');
});


//config server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log(`El servidor esta corriendo ${app.get('port')}`)
})