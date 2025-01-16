import { IAMClient, UntagUserCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const userName = 'user1';
const tagKeys = ['Department', 'Project'];

const run = async () => {
    try {
        const params = {
            UserName: userName,
            TagKeys: tagKeys,
        };
        const data = await client.send(new UntagUserCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};

run();
