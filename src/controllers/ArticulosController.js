const ArticulosModel = require('../models/ArticulosModel');

class ArticulosController
{
    static async indexGet(req,res)
    {
        let data = await ArticulosModel.consultar();
        res.send(data);
    }

    //static async indexpost(req,res){
        //try{
            //const newData = req.body;

            //const insertedId = await ArticulosModel.insertar(newData);

            //res.status(201)
                //.header('Location', `/Articulos/${insertedId}`)
                //.send({status: 201, message: `Created`});
        //} catch (error){
            //console.error(error);
            //res.status(400).send({error: 400, error: `Bad Request`});
        //}
    //}
}

module.exports = ArticulosController;