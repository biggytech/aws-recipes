const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  NewUserName: 'NeliHarbuzavaUpdated',
  UserName: 'NeliHarbuzava' // AWS searches by this UserName which user to update
}

iam.updateUser(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})