const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

const params = {
  Key: {
    id: {
      N: 1
    }
  },
  TableName: 'employees'
};

dynamodb.getItem(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})