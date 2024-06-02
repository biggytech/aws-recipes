import { EC2Client, CreateVolumeCommand } from '@aws-sdk/client-ec2';

// EBS - Elastic Block Store (SSDs/HDDs for EC2 instances)

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(new CreateVolumeCommand({
            AvailabilityZone: 'us-east-1d', // important! should be the same as in the EC2 instance
            Size: 5, // GB
            VolumeType: 'gp2', // General Purpose SSD (free tier)
        }));
        console.log('Volume created', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
