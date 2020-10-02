var pg = require("pg");
var connectionString = "pg://postgres:postgres@localhost:5432/cosasdeanime";
const client = new pg.Client(connectionString);
client.connect();
module.exports = client;