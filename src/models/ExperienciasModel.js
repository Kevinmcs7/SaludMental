const {connectToMysql} = require('../dbconnection');

class ExperienciasModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Experiencias");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Experiencias').where('ID_Experiencia', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Experiencias').insert(datos).returning('ID_Experiencia');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Experiencias').where('ID_Experiencia', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Experiencia'] = id;
        await db('Experiencias').where('ID_Experiencia', id).del();
        await db.insert(newData).into('Experiencia');
        return id;
    }
}

module.exports = ExperienciasModel;