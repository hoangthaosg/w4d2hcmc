'use strict'

const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    port: '7999',
    user: 'root',
    password: '123456',
    database: 'dbtest',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool =  mysql.createPool(dbConfig);

const getAll = async () => {
    try {
        // automaticall release
        const [patients] = await pool.query('select * from patient')
        return patients;
    } catch (err) {
        throw err;
    }
}

getAll().then(rs => console.log(rs))
.catch(err => console.error(err));
console.log('end!');
