import { IAMClient, CreatePolicyCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const policyDocument = {
  Version: '2012-10-17',
  Statement: [
    {
      Effect: 'Allow',
      Action: '*',
      Resource: '*'
    }
  ]
}

const params = {
  PolicyDocument: JSON.stringify(policyDocument),
  PolicyName: 'FullAccessPolicy'
};

(async function () {
  const data = await iamClient.send(new CreatePolicyCommand(params))
  console.log(data);
})()