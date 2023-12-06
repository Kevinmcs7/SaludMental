const {connectToMysql} = require('../dbconnection');

class MensajesModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Mensajes");
        return await query;
    }
}

module.exports = MensajesModel;