const AWS = require('aws-sdk');

const ses = new AWS.SES();

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

ses.sendEmail(params, (err, data) => {
    if (err) console.error('Unable to send email', err);
    else console.log('Email is send', data);
});
