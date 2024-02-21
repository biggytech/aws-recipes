const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.deleteObject({
    Bucket: 'files',
    Key: 'copied.png'
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
})
