import { IAMClient, CreateRoleCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const roleName = 'myJsRole';

const trustPolicy = {
    Version: '2012-10-17',
    Statement: [
        {
        Effect: 'Allow',
        Principal: {
            Service: 'ec2.amazonaws.com'
        },
        Action: 'sts:AssumeRole'
        }
    ]
};

const run = async () => {
    try {
        const data = await client.send(new CreateRoleCommand({
            RoleName: roleName,
            AssumeRolePolicyDocument: JSON.stringify(trustPolicy)
        }));

        console.log('Success', data.Role);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
