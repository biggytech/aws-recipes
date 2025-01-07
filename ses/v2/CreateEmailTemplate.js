const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    Template: {
        TemplateName: 'templateName',
        SubjectPart: 'Email subject',
        TextPart: 'Email body',
        HtmlPart: 'Email body',
    },
};

ses.createTemplate(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log('Created email template', data);
});
