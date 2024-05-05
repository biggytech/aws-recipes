const { Client } = require('pg');

const client = new Client({
    host: 'postgredb.cjxjvqjxjxjx.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    port: 5432,
});

const createDatabase = () => {
    client.connect();
    console.log('Connected to PostgreSQL');

    client.query('CREATE DATABASE pgdatabase', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Database created');
            console.log(res);
        }
        client.end();
    });
};

createDatabase();
