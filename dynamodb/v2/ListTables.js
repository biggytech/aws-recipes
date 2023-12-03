const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})