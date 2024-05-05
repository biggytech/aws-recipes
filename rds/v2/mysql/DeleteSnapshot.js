const AWS = require('aws-sdk');

const rds = new AWS.RDS();

rds.deleteDBSnapshot({
    DBSnapshotIdentifier: 'mydb-final-snapshot',
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
});
