import { EC2Client, DeleteKeyPairCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new DeleteKeyPairCommand({
                KeyName: 'v3key'
            }));
        console.log('Key pair deleted', data);
    } catch (err) {
        console.error(err);
    }
};

run();
