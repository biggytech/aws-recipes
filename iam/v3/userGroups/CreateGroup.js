import { IAMClient, CreateGroupCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  GroupName: 'RDSAdmins'
}

  (async function () {
    const data = await iamClient.send(new CreateGroupCommand(params))
    console.log(data);
  })()