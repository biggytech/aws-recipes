const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  GroupName: 'S3Admins',
  PolicyArn: 'arn:aws:iam::aws:policy/AmazonS3FullAccess'
}

iam.detachGroupPolicy(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})