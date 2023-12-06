const TestsModel = require('../models/TestsModel');

class TestsController
{
    static async indexGet(req,res)
    {
        let data = await TestsModel.consultar();
        res.send(data);
    }
}

module.exports = TestsController;