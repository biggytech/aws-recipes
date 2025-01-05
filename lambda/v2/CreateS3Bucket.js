const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'lambda',
    ACL: 'private'
};

exports.myfunc = (event) => {
    s3.createBucket(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Bucket created successfully', data.Location);
        }
    }
}
