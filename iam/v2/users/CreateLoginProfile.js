const AWS = require('aws-sdk')

// Creates Console Password for a user
// So he can login into AWS Management console

const iam = new AWS.IAM()

const params = {
  UserName: 'NeliHarbuzava',
  Password: 'qwerty123',
  PasswordResetRequired: false,
}

iam.createLoginProfile(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})