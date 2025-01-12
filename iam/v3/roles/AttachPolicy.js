import { IAMClient, AttachRolePolicyCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const roleName = 'myJsRole';

const run = async () => {
    try {
        const data = await client.send(new AttachRolePolicyCommand({
            RoleName: roleName,
            PolicyArn: 'arn:aws:iam::123456789011:policy/myScriptPolicy'
        }));

        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
