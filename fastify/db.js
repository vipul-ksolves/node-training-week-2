const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fastify",
  password: "vipul@2002",
  port: "5432",
});

pool.connect();

module.exports = pool;
