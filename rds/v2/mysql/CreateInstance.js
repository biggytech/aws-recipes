const AWS = require('aws-sdk');

// Solves "Missing region in config" error
AWS.config.update({ region: 'us-east-1' });
// or
// export AWS_SDK_LOAD_CONFIG=1

const rds = new AWS.RDS();

rds.createDBInstance({
    DBName: 'mydb',
    DBInstanceIdentifier: 'mydb',
    AllocatedStorage: 5, // GB
    DBInstanceClass: 'db.t2.micro', // free tier
    Engine: 'MySQL',
    MasterUsername: 'admin',
    MasterUserPassword: 'password',
    Port: 3306,
    EngineVersion: '8.0.27',
    PubliclyAccessible: true,
    StorageType: 'gp2', // General Purpose
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
})
