const { Client } = require('pg');

const client = new Client({
    host: 'postgredb.cjxjvqjxjxjx.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'password',
    port: 5432,
    database: 'pgdatabase',
});

const insertData = () => {
    client.connect();
    console.log('Connected to PostgreSQL');

    const query = `
        INSERT INTO Employee (ID, NAME, EMAIL)
        VALUES (1, 'John Doe', 'john@mail.com');
    `;

    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Data inserted');
            console.log(res);
        }
        client.end();
    });

};

insertData();
