const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB()

const params = {
  BackupArn: 'arn:aws:dynamodb:us-east-1:374522701931:table/employees/backup/01647249505099-567fb89f'
};

dynamodb.deleteBackup(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})