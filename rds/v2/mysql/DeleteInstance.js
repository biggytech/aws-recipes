const AWS = require('aws-sdk');

const rds = new AWS.RDS();

rds.deleteDBInstance({
    DBInstanceIdentifier: 'mydb',
    DeleteAutomatedBackups: true,
    FinalDBSnapshotIdentifier: 'mydb-final-snapshot',
    SkipFinalSnapshot: false,
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
});
