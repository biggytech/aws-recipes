import { EC2Client, ModifyVolumeCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(new ModifyVolumeCommand({
            VolumeId: 'vol-07e5b9c56a5ad483f', // volume ID
            Size: 7, // GB
        }));
        console.log('Volume size increased', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
