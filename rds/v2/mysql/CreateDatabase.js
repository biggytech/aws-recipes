const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mydb.clrnsymfz2e0.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('Connected to MySQL');

    connection.query("CREATE DATABASE testdb", (err, result) => {
        if (err) {
            throw err;
        }

        console.log('Database created');
    });
});
