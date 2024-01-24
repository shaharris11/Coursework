const { Client } = require('pg');

const dbName = "slime"
const client = new Client(`postgres://localhost:3546/${dbName}`)

module.exports = client;