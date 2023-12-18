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
  },
  UpdateExpression: 'set info.rating = :rating, info.plot = :plot, info.actors = :actors',
  ExpressionAttributeValues: {
    ':rating': 5.5,
    ':plot': 'This is new movie updated',
    ':actors': ['First Actor', 'Second Actor']
  },
  ReturnValues: 'UPDATED_NEW'
};

docClient.update(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});