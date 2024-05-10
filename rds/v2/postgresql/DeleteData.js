const { Client } = require('pg');

const client = new Client({
    host: 'postgredb.cjxjvqjxjxjx.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    port: 5432,
    database: 'pgdatabase',
});

const deleteData = () => {
    client.connect();
    console.log('Connected to PostgreSQL');

    const query = `
        DELETE FROM Employee
        WHERE ID = 1;
    `;

    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Data deleted');
            console.log(res.rows);
        }
        client.end();
    });
};

deleteData();
