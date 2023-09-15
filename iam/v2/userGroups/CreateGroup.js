const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  GroupName: 'RDSAdmins'
}

iam.createGroup(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})