const CitasModel = require('../models/CitasModel');

class CitasController
{
    static async indexGet(req,res)
    {
        let data = await CitasModel.consultar();
        res.send(data);
    }
}

module.exports = CitasController;