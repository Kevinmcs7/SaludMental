const {connectToMysql} = require('../dbconnection');

class MensajesModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Mensajes");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Mensajes').where('ID_Mensaje', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Mensajes').insert(datos).returning('ID_Mensaje');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Mensajes').where('ID_Mensaje', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Mensaje'] = id;
        await db('Mensajes').where('ID_Mensaje', id).del();
        await db.insert(newData).into('Mensajes');
        return id;
    }

}

module.exports = MensajesModel;