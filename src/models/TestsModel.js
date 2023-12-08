const {connectToMysql} = require('../dbconnection');

class TestsModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Tests");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Tests').where('ID_Test', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Tests').insert(datos).returning('ID_Test');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Tests').where('ID_Test', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Test'] = id;
        await db('Tests').where('ID_Test', id).del();
        await db.insert(newData).into('Tests');
        return id;
    }
}

module.exports = TestsModel;