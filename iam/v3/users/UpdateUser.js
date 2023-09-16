import { IAMClient, UpdateUserCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  UserName: 'NeliHarbuzava',
  NewUserName: 'NeliHarbuzavaUpdated'
}

  (async function () {
    try {
      const data = await iamClient.send(new UpdateUserCommand(params))
      console.log('User updated: ', data);
    } catch (err) {
      console.log('Error:', error);
    }
  })()