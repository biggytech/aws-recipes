const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const table = 'movies';
const year = 2022;
const title = 'New Movie';

const params = {
  TableName: table,
  Item: {
    year,
    title,
    info: {
      plot: 'This is new movie',
      rating: 2
    }
  }
};

docClient.put(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})