const { Pool } = require('pg');
require('dotenv').config();


// pools will use environment variables
// for connection information
const pool = new Pool({
	user: process.env.PSQL_USER,
	host: process.env.PSQL_HOST,
	database: process.env.PSQL_DB,
	password: process.env.PSQL_PASS,
	port: process.env.PSQL_PORT
});

module.exports = pool;