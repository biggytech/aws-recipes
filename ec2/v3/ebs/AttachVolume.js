import { EC2Client, AttachVolumeCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(new AttachVolumeCommand({
            Device: '/dev/sdh', // address to mount
            InstanceId: 'i-0dfe679a6b5379311', // instance ID
            VolumeId: 'vol-07e5b9c56a5ad483f', // volume ID
        }));
        console.log('Volume attached', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
