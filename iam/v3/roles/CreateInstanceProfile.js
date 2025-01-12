import { IAMClient, CreateInstanceProfileCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const instanceProfileName = 'myJSProfile';

const run = async () => {
    try {
        const data = await client.send(new CreateInstanceProfileCommand({ InstanceProfileName: instanceProfileName }));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
