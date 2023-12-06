const PreguntasRespuestasModel = require('../models/PreguntasRespuestasModel');

class PreguntasRespuestasController
{
    static async indexGet(req,res)
    {
        let data = await PreguntasRespuestasModel.consultar();
        res.send(data);
    }
}

module.exports = PreguntasRespuestasController;