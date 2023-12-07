const {connectToMysql} = require('../dbconnection');

class ArticulosModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Articulos");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Articulos').where('ID_Articulo', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Articulos').insert(datos).returning('ID_Articulo');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Articulos').where('ID_Articulo', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Articulo'] = id;
        await db('Articulos').where('ID_Articulo', id).del();
        await db.insert(newData).into('Articulos');
        return id;
    }
}

module.exports = ArticulosModel;