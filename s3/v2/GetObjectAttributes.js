const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const params = {
    Bucket: 'files',
    Key: 'textfile.txt',
    ObjectAttributes: [
        // https://aws.amazon.com/s3/storage-classes/
        'StorageClass'
    ]
};

s3.getObjectAttributes(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
