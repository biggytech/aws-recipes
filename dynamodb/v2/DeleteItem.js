const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const table = 'movies';
const year = 2022;
const title = 'New Movie';

const params = {
  TableName: table,
  Key: {
    year,
    title
  }
};

docClient.delete(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})