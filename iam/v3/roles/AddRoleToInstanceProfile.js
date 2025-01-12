import { IAMClient, AddRoleToInstanceProfileCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const instanceProfileName = 'myJSProfile';
const roleName = 'myJsRole';

const run = async () => {
    try {
        const data = await client.send(new AddRoleToInstanceProfileCommand({
            InstanceProfileName: instanceProfileName,
            RoleName: roleName
        }));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
