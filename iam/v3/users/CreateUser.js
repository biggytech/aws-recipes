const { IAMClient, CreateUserCommand, GetUserCommand } = require('@aws-sdk/client-iam')

const iamClient = new IAMClient()

const params = {
  UserName: 'NeliHarbuzava'
}

  (async function () {
    try {
      const existingUserData = await iamClient.send(new GetUserCommand(params));
      console.log('User already exists', existingUserData);
    } catch (err) {
      const result = await iamClient.send(new CreateUserCommand(params))
      console.log('New user created', result);
    }
  })();