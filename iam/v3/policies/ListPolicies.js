import { IAMClient, ListPoliciesCommand } from '@aws-sdk/client-iam'

const iamClient = new IAMClient()

const params = {
  Scope: 'Local'
}

  (async function () {
    const data = await iamClient.send(new ListPoliciesCommand(params))
    console.log(data);
  })()