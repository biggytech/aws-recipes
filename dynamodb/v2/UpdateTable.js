const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB()

// Can only change one characteristic at a time
const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 3,
    WriteCapacityUnits: 3
  },
  TableName: 'employees'
};

// Returns table details
dynamodb.updateTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data)
  }
})