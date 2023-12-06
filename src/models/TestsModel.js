const {connectToMysql} = require('../dbconnection');

class TestsModel 
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db("Tests");
        return await query;
    }
}

module.exports = TestsModel;