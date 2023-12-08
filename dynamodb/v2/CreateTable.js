const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
// or use env variable instead: AWS_SDK_LOAD_CONFIG=1 (to load local config)

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'movies',
  KeySchema: [
    {
      // Partition key
      AttributeName: 'year',
      KeyType: 'HASH'
    },
    {
      // Sort key
      AttributeName: 'title',
      KeyType: 'RANGE'
    }
  ],
  AttributeDefinitions: [
    {
      AttributeName: 'year',
      AttributeType: 'N' // number
    },
    {
      AttributeName: 'title',
      AttributeType: 'S' // string
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 4,
    WriteCapacityUnits: 4
  }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
