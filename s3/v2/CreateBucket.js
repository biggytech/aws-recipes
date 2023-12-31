const AWS = require('aws-sdk');

// by default buckets are created in us-east-1
// AWS.config.update({ region: 'us-east-1' });
// AWS.config.update({ accessKeyId: 'myKey', secretAccessKey: 'secretKey' });

const s3 = new AWS.S3();

const params = {
    Bucket: 'images',
    ACL: 'private', // 'public-read', 'public-read-write'
    // CreateBucketConfiguration: {
    //     LocationConstraint: 'us-east-1' // not needed for us-east-1
    // }
};

s3.createBucket(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
