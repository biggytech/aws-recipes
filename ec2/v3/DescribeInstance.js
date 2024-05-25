import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new DescribeInstancesCommand({
                InstanceIds: [
                    'i-02bebc4553aa73c48' // instance ID
                ]
            }));
        console.log('Instances found', data);
    } catch (err) {
        console.error(err);
    }
};

run();
