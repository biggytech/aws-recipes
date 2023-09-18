import { IAMClient, AttachGroupPolicyCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  GroupName: 'RDSAdmins',
  PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
}

  (async function () {
    const data = await iamClient.send(new AttachGroupPolicyCommand(params))
    console.log(data);
  })()