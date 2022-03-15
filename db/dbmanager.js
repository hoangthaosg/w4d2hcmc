'use strict';

const dbConfig = require('./dbconfig');
const mysql = require('mysql2/promise'); // using promise or async/await

const pool =  mysql.createPool(dbConfig);

module.exports = pool;