const AWS = require('aws-sdk')

const iam = new AWS.IAM()

// A logged-in (current that is accessing the AWS) user should have
// the "IAMUserChangePassword" policy attached

const params = {
  NewPassword: 'NewPassword123!',
  OldPassword: 'qwerty123)'
}

iam.changePassword(params, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})