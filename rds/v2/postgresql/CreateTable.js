const { Client } = require('pg');

const client = new Client({
    host: 'postgredb.cjxjvqjxjxjx.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    port: 5432,
    database: 'pgdatabase',
});

const createTable = () => {
    client.connect();
    console.log('Connected to PostgreSQL');

    const query = `
        CREATE TABLE IF Employee (
            ID INT PRIMARY KEY NOT NULL,
            NAME TEXT NOT NULL,
            EMAIL TEXT NOT NULL
        )
    `;

    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Table created');
            console.log(res);
        }
        client.end();
    });
};

createTable();
