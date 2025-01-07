import { SESClient, SendTemplatedEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    Source: 'test@example.com',
    Destination: {
        ToAddresses: ['test@example.com', 'another@mail.com'],
        CcAddresses: ['test@example.com']
    },
    ReplyToAddresses: ['test@example.com'],
    Template: 'templateName',
    TemplateData: '{ "name": "John" }'
};

const run = async () => {
    try {
        const data = await sesClient.send(new SendTemplatedEmailCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.error(err, err.stack);
    }
};

run();
