const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.copyObject({
        Bucket: 'files', // destination bucket
        CopySource: 'images/art.png', // source bucket and object
        Key: 'copied.png' // destination object key (name)
    },
    (err, data) => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log('Success', data);
        }
    }
);
