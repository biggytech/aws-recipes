const AWS = require('aws-sdk')

const s3 = new AWS.S3();

const params = {
    Bucket: 'testbucket'
};

s3.deleteBucket(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
