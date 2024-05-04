const AWS = require('aws-sdk');

// Solves "Missing region in config" error
AWS.config.update({ region: 'us-east-1' });
// or
// export AWS_SDK_LOAD_CONFIG=1

const rds = new AWS.RDS();

rds.describeDBInstances({
    DBInstanceIdentifier: 'mydb',
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
})
