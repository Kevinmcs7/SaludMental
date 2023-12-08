const {connectToMysql} = require('../dbconnection');

class ResultadosTestsModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("ResultadosTests");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('ResultadosTests').where('ID_Resultado', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('ResultadosTests').insert(datos).returning('ID_Resultado');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('ResultadosTests').where('ID_Resultado', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Resultado'] = id;
        await db('ResultadosTests').where('ID_Resultado', id).del();
        await db.insert(newData).into('ResultadosTests');
        return id;
    }

    

}

module.exports = ResultadosTestsModel;