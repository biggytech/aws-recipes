import { IAMClient, TagUserCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const userName = 'user1';

const tags = [
    { Key: 'Department', Value: 'HR'},
    { Key: 'Project', Value: 'Onboarding'},
];

const run = async () => {
    try {
        const params = {
            UserName: userName,
            Tags: tags,
        };
        const data = await client.send(new TagUserCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
