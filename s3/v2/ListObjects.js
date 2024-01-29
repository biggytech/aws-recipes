const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const params = {
    Bucket: 'images',
}

s3.listObjects(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
