var pg = require("pg");
var connectionString = `pg://${process.env.DB_PASSWORD}:${process.env.DB_USER}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const client = new pg.Client(connectionString);
client.connect();
module.exports = client;