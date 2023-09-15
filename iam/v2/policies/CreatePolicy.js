const AWS = require('aws-sdk')

const iam = new AWS.IAM()

// Full access policy
const policyDocument = {
  Version: '2012-10-17', // https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html
  Statement: [
    {
      Effect: 'Allow',
      Action: '*',
      Resource: '*'
    }
  ]
}

const params = {
  PolicyDocument: JSON.stringify(policyDocument), // type string! (JSON) https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createPolicy-property
  PolicyName: 'adminpolicy',
  Description: 'Full access policy'
}

iam.createPolicy(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})