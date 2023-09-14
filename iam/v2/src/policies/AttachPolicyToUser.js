const AWS = require('aws-sdk')

const iam = new AWS.IAM()

// ARN - Amazon Resource Name

const params = {
  PolicyArn: 'arn:aws:iam::374522701931:policy/adminpolicy',
  UserName: 'NeliHarbuzava'
}

iam.attachUserPolicy(params, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data);
  }
})