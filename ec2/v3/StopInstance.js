import { EC2Client, StopInstancesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new StopInstancesCommand({
                InstanceIds: [
                    'i-02bebc4553aa73c48' // instance ID
                ]
            }));
        console.log('Instance stopped', data);
    } catch (err) {
        console.error(err);
    }
};

run();
