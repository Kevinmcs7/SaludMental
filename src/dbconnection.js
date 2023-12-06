const fs = require('fs');
const knex = require('knex');

const connectToMysql = async function() {
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql', //nombre del servicio en el docker compose.yml
            user: 'user_SaludMental',
            password: dbPassword,
            database: 'SaludMental'
        }
    });
    return db;
}

module.exports = { connectToMysql };