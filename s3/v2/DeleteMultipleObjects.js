const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.deleteObjects({
    Bucket: 'files',
    Delete: {
        Objects: [
            {
                Key: 'aws.png'
            },
            {
                Key: 'file.txt'
            }
        ]
    }
}, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
})
