const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blogdb',
  password: 'Cpark324',
  port: 5432,
});