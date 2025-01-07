const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    IdentityType: 'EmailAddress',
};

ses.listIdentities(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log('List of email identities', data.Identities);
});
