const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB();

const params = {
  RequestItems: {
    'employees': [ // table name
      {
        PutRequest: {
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
      },
      {
        PutRequest: {
          Item: {
            id: {
              N: 2
            },
            name: {
              S: 'John Doe'
            },
            age: {
              N: 23
            }
          }
        }
      }
    ]
  }
}

// inserts up to 25 items to the DB
dynamodb.batchWriteItem(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})