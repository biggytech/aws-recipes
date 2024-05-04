const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mydb.clrnsymfz2e0.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306,
    database: 'testdb',
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('Connected to MySQL');

    const sql = `UPDATE customers SET name = 'Jane' WHERE name = 'John';`;

    connection.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        console.log('Data updated');
        console.log(result.affectedRows + ' record(s) updated');
    });
});
