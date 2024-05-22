import { EC2Client, CreateKeyPairCommand } from '@aws-sdk/client-ec2';
import { writeFile } from 'fs';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new CreateKeyPairCommand({
                KeyName: 'v3key',
                KeyType: 'rsa'
            })
        );
    
        writeFile('v3key.pem', data.KeyMaterial, (err) => {
            if (err) {
                console.error({ message: 'Error writing key to file', error: err });
                return;
            }
    
            console.log({ message: 'Key pair created' });
        });
    } catch (err) {
        console.error({ message: err.message });
    }
};

run();
