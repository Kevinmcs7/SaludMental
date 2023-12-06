const {connectToMysql} = require('../dbconnection');

class ArticulosModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Articulos");
        return await query;
    }

    //static async insertar(datos) {
        //let db = await connectMysql();
        //const result = await db('Articulos').insert(datos).returning('ID_Articulo');
        //return result[0];
    //}
}

module.exports = ArticulosModel;