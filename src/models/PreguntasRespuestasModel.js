const {connectToMysql} = require('../dbconnection');

class PreguntasRespuestasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("PreguntasRespuestas");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('PreguntasRespuestas').where('ID_PreguntaRespuesta', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('PreguntasRespuestas').insert(datos).returning('ID_PreguntaRespuesta');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('PreguntasRespuestas').where('ID_PreguntaRespuesta', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_PreguntaRespuesta'] = id;
        await db('PreguntasRespuestas').where('ID_PreguntaRespuesta', id).del();
        await db.insert(newData).into('PreguntasRespuestas');
        return id;
    }
}

module.exports = PreguntasRespuestasModel;