import { SESClient, ListIdentitiesCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    IdentityType: 'EmailAddress',
};

const run = async () => {
    try {
        const data = await sesClient.send(new ListIdentitiesCommand(params));
        console.log('Success', data.Identities);
        return data;
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
