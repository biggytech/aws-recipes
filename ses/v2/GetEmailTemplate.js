const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    TemplateName: 'templateName'
};

ses.getTemplate(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log('Template:', data.Template);
});
