const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
  // Local - customer managed policies
  // AWS - aws managed
  // ALL - all policies
  Scope: 'Local',
}

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listPolicies-property
iam.listPolicies(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})