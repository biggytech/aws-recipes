import { IAMClient, CreatePolicyCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const policyName = 'myScriptPolicy';

const policyDocument = {
    Version: '2012-10-17',
    Statement: [
        {
            Effect: 'Allow',
            Action: 's3:GetObject',
            Resource: 'arn:aws:s3:::my_bucket/*'
        }
    ]
};

const run = async () => {
    try {
        const data = await client.send(new CreatePolicyCommand({
            PolicyName: policyName,
            PolicyDocument: JSON.stringify(policyDocument)
        }));

        console.log('Success', data.Policy);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
