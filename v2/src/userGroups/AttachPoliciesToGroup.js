const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params1 = {
  GroupName: 'RDSAdmins',
  PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
}

iam.attachGroupPolicy(params1, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

const params2 = {
  GroupName: 'S3Admins',
  PolicyArn: 'arn:aws:iam::aws:policy/AmazonS3FullAccess'
}

iam.attachGroupPolicy(params2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})