const ExperienciasModel = require('../models/ExperienciasModel');

class ExperienciasController
{
    static async indexGet(req,res)
    {
        let data = await ExperienciasModel.consultar();
        res.send(data);
    }
}

module.exports = ExperienciasController;