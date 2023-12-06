const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

const params = {
  RequestItems: {
    'employees': {
      Keys: [
        {
          id: {
            N: 1,
          }
        },
        {
          id: {
            N: 2,
          }
        }
      ]
    }
  }
};

dynamodb.batchGetItem(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})