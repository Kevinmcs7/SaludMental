const {connectToMysql} = require('../dbconnection');

class PreguntasRespuestasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("PreguntasRespuestas");
        return await query;
    }
}

module.exports = PreguntasRespuestasModel;