const {connectToMysql} = require('../dbconnection');

class UsuariosModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Usuarios");
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Usuarios').where('ID_Usuario', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Usuarios').insert(datos).returning('ID_Usuario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Usuarios').where('ID_Usuario', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['ID_Usuario'] = id;
        await db('Usuarios').where('ID_Usuario', id).del();
        await db.insert(newData).into('Usuarios');
        return id;
    }


}

module.exports = UsuariosModel;