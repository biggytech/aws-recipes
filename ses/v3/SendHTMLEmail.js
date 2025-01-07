import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient();

const htmlContents = `
    <html>
        <h1 style="text-align: center">This is header</h1>
        <p style="color: red">This is red text</p>
    </html>
`;

const params = {
    Destination: {
        ToAddresses: ['test@example.com', 'another@mail.com'],
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: htmlContents
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test HTML email'
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
