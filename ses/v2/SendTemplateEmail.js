const AWS = require('aws-sdk');

const ses = new AWS.SES();

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

ses.sendTemplatedEmail(params, (err, data) => {
    if (err) console.error('Unable to send email', err);
    else console.log('Email is send', data);
});
