const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
// or export AWS_SDK_LOAD_CONFIG=1

const ses = new AWS.SES();

const params = {
    EmailAddress: 'test@example.com',
};

// adds unverified email address, sents the verification email
// verify manually by clicking the link in the email sent
ses.verifyEmailAddress(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log('Created email address', data);
});
