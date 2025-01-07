const AWS = require('aws-sdk');

const ses = new AWS.SES();

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

ses.sendEmail(params, (err, data) => {
    if (err) console.error('Unable to send email', err);
    else console.log('Email is send', data);
});
