import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const params = {
    Destination: {
        ToAddresses: ['test@example.com', 'another@mail.com'],
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: 'This is the message body'
            },
            Text: {
                Charset: 'UTF-8',
                Data: 'This is the message body'
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: 'test@example.com',
};

const run = async () => {
    try {
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log('Success', data);
    } catch (err) {
        console.error('Unable to send email', err);
    }
};

run();
