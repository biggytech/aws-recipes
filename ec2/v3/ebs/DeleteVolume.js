import { EC2Client, DeleteVolumeCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(new DeleteVolumeCommand({
            VolumeId: 'vol-07e5b9c56a5ad483f', // volume ID
        }));
        console.log('Volume deleted', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
