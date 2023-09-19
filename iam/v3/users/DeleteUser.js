import { IAMClient, DeleteUserCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  UserName: 'tempuser'
}

  (async function () {
    const data = await iamClient.send(new DeleteUserCommand(params))
    console.log(data);
  })()