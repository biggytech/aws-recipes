const AWS = require('aws-sdk');

const ses = new AWS.SES();

ses.listTemplates((err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data.TemplatesMetadata);
});
