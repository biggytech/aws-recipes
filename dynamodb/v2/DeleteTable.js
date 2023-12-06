const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'employees'
};

dynamodb.deleteTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})