import { SESClient, VerifyEmailAddressCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    EmailAddress: 'test@example.com',
};

const run = async () => {
    try {
        const data = await sesClient.send(new VerifyEmailAddressCommand(params));
        console.log('Created email address', data);
    } catch (err) {
        console.log(err, err.stack);
    }
};

run();
