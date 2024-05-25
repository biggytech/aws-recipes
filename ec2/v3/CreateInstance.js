import { EC2Client, RunInstancesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new RunInstancesCommand({
                ImageId: 'ami-0c02fb55956c7d316', // Amazon Linux 2 AMI
                MinCount: 1,
                MaxCount: 1,
                InstanceType: 't2.micro', // free tier
                KeyName: 'v3key', // previously created key pair
                SecurityGroups: ['v3group'], // previously created security group
            }));
        console.log('Instance created', data);
    } catch (err) {
        console.error(err);
    }
};

run();
