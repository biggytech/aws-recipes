import { EC2Client, DescribeVolumesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(new DescribeVolumesCommand({}));
        console.log('Volumes', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
