const express = require('express');
const app = express();
const puerto = 80;


const ArticulosController = require('./controllers/ArticulosController');
app.use(express.json());
app.get('/Articulos', ArticulosController.indexGet);
// app.post('/Articulos', ArticulosController.indexPost);

const CitasController = require('./controllers/CitasController');
app.use(express.json());
app.get('/Citas', CitasController.indexGet);

const ExperienciasController = require('./controllers/ExperienciasController');
app.use(express.json());
app.get('/Experiencias', ExperienciasController.indexGet);

const MensajesController = require('./controllers/MensajesController');
app.use(express.json());
app.get('/Mensajes', MensajesController.indexGet);

const PreguntasRespuestasController = require('./controllers/PreguntasRespuestasController');
app.use(express.json());
app.get('/PreguntasRespuestas',PreguntasRespuestasController.indexGet);

const ResultadosTestsController = require('./controllers/ResultadosTestsController');
app.use(express.json());
app.get('/ResultadosTests', ResultadosTestsController.indexGet);

const TestsController = require('./controllers/TestsController');
app.use(express.json());
app.get('/Tests', TestsController.indexGet);

const UsuariosController = require('./controllers/UsuariosController');
app.use(express.json());
app.get('/Usuarios', UsuariosController.indexGet);


// app.get('/menus/:id([0-9]+)', MenusController.itemGet);

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' !BIENVENIDOS A MI PAGINA SOBRE LA SALUD MENTAL!' );
});

app.listen(puerto, function(){
    console.log('Servidor Iniciado');
});