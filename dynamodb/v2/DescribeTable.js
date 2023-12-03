const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'employees'
};

dynamodb.describeTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // returns table info (name, schema, status, creation date, capacity units, arn)
    console.log(data);
  }
})