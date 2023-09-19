import { IAMClient, CreateLoginProfileCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  UserName: 'NeliHarbuzava',
  Password: 'qwerty123',
  PasswordResetRequired: false,
}

  (async function () {
    const data = await iamClient.send(new CreateLoginProfileCommand(params))
    console.log(data);
  })()