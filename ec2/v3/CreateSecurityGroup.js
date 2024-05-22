import { EC2Client, CreateSecurityGroupCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new CreateSecurityGroupCommand({
                Description: 'This is v3 sdk security group',
                GroupName: 'v3group'
            })
        );

        console.log({ message: 'Security group created', data });
    } catch (err) {
        console.error({ message: err.message });
    }
};

run();
