import { IAMClient, ListUsersCommand, ListUserTagsCommand } from '@aws-sdk/client-iam'

const client = new IAMClient();

const run = async () => {
    try {
        const users = await client.send(new ListUsersCommand({}));

        for (const user of users.Users) {
            const userName = user.UserName;

            const tags = await client.send(
                new ListUserTagsCommand({ UserName: userName })
            );

            console.log('Tags for user', userName, tags.Tags);
        }
    } catch (err) {
        console.log('Error', err);
    }
};

run();
