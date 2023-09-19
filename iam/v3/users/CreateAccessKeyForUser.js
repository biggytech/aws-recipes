import { IAMClient, CreateAccessKeyCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  UserName: 'NeliHarbuzava'
}

  (async function () {
    const data = await iamClient.send(new CreateAccessKeyCommand(params))
    console.log(data);
  })()