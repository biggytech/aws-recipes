import { IAMClient, CreatePolicyCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

/**
 * Conditional policies in AWS allow you to specify conditions
 * under which a policy statement is in effect.
 * These conditions can be based on various factors such as
 * time, IP address, or the presence of specific tags.
 * By using conditions, you can create more granular
 * and secure access controls for your AWS resources.
 */

const currentDate = new Date();
const currentDateString = currentDate.toISOString().split('T')[0];

// allowed access times
const startTime = `${currentDateString}T01:00:00Z`;
const endTime = `${currentDateString}T03:00:00Z`;

const policyDocument = {
    Version: '2012-10-17',
    Statement: [
        {
            Effect: 'Allow',
            Action: 's3:GetObject',
            Resource: 'arn:aws:s3:::my_bucket/*',
            Condition: {
                DateGreaterThan: {
                    'aws:CurrentTime': startTime
                },
                DateLessThan: {
                    'aws:CurrentTime': endTime
                }
            }
        }
    ]
};

const run = async () => {
    try {
        const params = {
            PolicyName: 'JSAccessWindowPolicy',
            PolicyDocument: JSON.stringify(policyDocument),
        };
        const data = await client.send(new CreatePolicyCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
