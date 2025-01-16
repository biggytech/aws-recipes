import { EC2Client, RunInstancesCommand } from '@aws-sdk/client-ec2';

const client = new EC2Client();

const instanceProfileName = 'myJSProfile';

const params = {
    ImageId: 'ami-067d1e60475437da2',
    InstanceType: 't2.micro',
    MinCount: 1,
    MaxCount: 1,
    IamInstanceProfile: {
        Name: instanceProfileName
    }
};

const run = async () => {
    try {
        const data = await client.send(new RunInstancesCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
