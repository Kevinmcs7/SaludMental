const {connectToMysql} = require('../dbconnection');

class CitasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Citas");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Citas').where('ID_Cita', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Citas').insert(datos).returning('ID_Citas');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Citas').where('ID_Cita', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Cita'] = id;
        await db('Citas').where('ID_Cita', id).del();
        await db.insert(newData).into('Citas');
        return id;
    }
}

module.exports = CitasModel;