const express = require('express');
const app = express();
const puerto = 80;


const ArticulosController = require('./controllers/ArticulosController');
app.use(express.json());
app.get('/Articulos', ArticulosController.indexGet);
app.get('/Articulos/:id([0-9]+)', ArticulosController.itemGet);
app.post('/Articulos', ArticulosController.indexPost);
app.put('/Articulos/:id([0-9]+)', ArticulosController.itemPut);
app.patch('/Articulos/:id([0-9]+)', ArticulosController.itemPatch);

const CitasController = require('./controllers/CitasController');
app.use(express.json());
app.get('/Citas', CitasController.indexGet);
app.get('/Citas/:id([0-9]+)', CitasController.itemGet);
app.post('/Citas', CitasController.indexPost);
app.put('/Articulos/:id([0-9]+)', CitasController.itemPut);
app.patch('/Citas/:id([0-9]+)', CitasController.itemPatch);

const ExperienciasController = require('./controllers/ExperienciasController');
app.use(express.json());
app.get('/Experiencias', ExperienciasController.indexGet);
app.get('/Experiencias/:id([0-9]+)', ExperienciasController.itemGet);
app.post('/Experiencias', ExperienciasController.indexPost);
app.put('/Experiencias/:id([0-9]+)', ExperienciasController.itemPut);
app.patch('/Experiencias/:id([0-9]+)', ExperienciasController.itemPatch);

const MensajesController = require('./controllers/MensajesController');
app.use(express.json());
app.get('/Mensajes', MensajesController.indexGet);
app.get('/Mensajes/:id([0-9]+)', MensajesController.itemGet);
app.post('/Mensajes', MensajesController.indexPost);
app.put('/Mensajes/:id([0-9]+)', MensajesController.itemPut);
app.patch('/Mensajes/:id([0-9]+)', MensajesController.itemPatch);

const PreguntasRespuestasController = require('./controllers/PreguntasRespuestasController');
app.use(express.json());
app.get('/PreguntasRespuestas',PreguntasRespuestasController.indexGet);
app.get('/PreguntasRespuestas/:id([0-9]+)', PreguntasRespuestasController.itemGet);
app.post('/PreguntasRespuestas', PreguntasRespuestasController.indexPost);
app.put('/PreguntasRespuestas/:id([0-9]+)', PreguntasRespuestasController.itemPut);
app.patch('/PreguntasRespuestas/:id([0-9]+)', PreguntasRespuestasController.itemPatch);

const ResultadosTestsController = require('./controllers/ResultadosTestsController');
app.use(express.json());
app.get('/ResultadosTests', ResultadosTestsController.indexGet);
app.get('/ResultadosTests/:id([0-9]+)', ResultadosTestsController.itemGet);
app.post('/ResultadosTests', ResultadosTestsController.indexPost);
app.put('/ResultadosTests/:id([0-9]+)', ResultadosTestsController.itemPut);
app.patch('/ResultadosTests/:id([0-9]+)', ResultadosTestsController.itemPatch);

const TestsController = require('./controllers/TestsController');
app.use(express.json());
app.get('/Tests', TestsController.indexGet);
app.get('/Tests/:id([0-9]+)', TestsController.itemGet);
app.post('/Tests', TestsController.indexPost);
app.put('/Tests/:id([0-9]+)', TestsController.itemPut);
app.patch('/Tests/:id([0-9]+)', TestsController.itemPatch);

const UsuariosController = require('./controllers/UsuariosController');
app.use(express.json());
app.get('/Usuarios', UsuariosController.indexGet);
app.get('/Usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/Usuarios', UsuariosController.indexPost);
app.put('/Usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/Usuarios/:id([0-9]+)', UsuariosController.itemPatch);


// app.get('/menus/:id([0-9]+)', MenusController.itemGet);

app.get('/', function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' !BIENVENIDOS A MI PAGINA SOBRE LA SALUD MENTAL!' );
});

app.listen(puerto, function(){
    console.log('Servidor Iniciado');
});