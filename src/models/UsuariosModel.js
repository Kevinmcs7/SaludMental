const {connectToMysql} = require('../dbconnection');

class UsuariosModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Usuarios");
        return await query;
    }
}

module.exports = UsuariosModel;