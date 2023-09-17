import { IAMClient, AttachUserPolicyCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  PolicyArn: 'arn:aws:iam::374522701931:policy/FullAccessPolicy',
  UserName: 'NeliHarbuzava'
}

  (async function () {
    const data = await iamClient.send(new AttachUserPolicyCommand(params))
    console.log(data);
  })()