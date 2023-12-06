const {connectToMysql} = require('../dbconnection');

class ExperienciasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Experiencias");
        return await query;
    }
}

module.exports = ExperienciasModel;