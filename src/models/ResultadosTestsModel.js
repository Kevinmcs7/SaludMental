const {connectToMysql} = require('../dbconnection');

class ResultadosTestsModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("ResultadosTests");
        return await query;
    }
}

module.exports = ResultadosTestsModel;