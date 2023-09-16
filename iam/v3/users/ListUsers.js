import { IAMClient, ListUsersCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  MaxItems: 10
}

  (async function () {
    const data = await iamClient.send(new ListUsersCommand(params))

    data.Users.forEach(user => {
      console.log(`User name: ${user.UserName}. Arn: ${user.Arn}`)
    })
  }())