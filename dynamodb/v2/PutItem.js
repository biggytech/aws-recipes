const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
// or use env variable instead: AWS_SDK_LOAD_CONFIG=1 (to load local config)

const dynamodb = new AWS.DynamoDB();

// partition key: id
const params = {
  TableName: 'employees',
  Item: {
    id: {
      N: 1
    },
    name: {
      S: 'Neli Harbuzava'
    },
    age: {
      N: 99
    }
  }
}

// Adds or replaces (if the same primary key)
// an item in the table

dynamodb.putItem(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})