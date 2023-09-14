const AWS = require('aws-sdk')

const iam = new AWS.IAM()

// Disables user possibility to login
// into AWS console (removes Console Password)

const params = {
  UserName: 'NeliHarbuzava'
}

iam.deleteLoginProfile(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})