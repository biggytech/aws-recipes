const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  // all policies should be detached
  // & access keys should be deleted (not deactivated) from the user
  // before a user deletion
  // otherwise a DeleteConflict (status 409) occur
  UserName: 'tempuser',
}

iam.deleteUser(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})