const ResultadosTestsModel = require('../models/ResultadosTestsModel');

class ResultadosTestsController
{
    static async indexGet(req,res)
    {
        let data = await ResultadosTestsModel.consultar();
        res.send(data);
    }
}

module.exports = ResultadosTestsController;