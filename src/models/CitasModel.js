const {connectToMysql} = require('../dbconnection');

class CitasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Citas");
        return await query;
    }
}

module.exports = CitasModel;