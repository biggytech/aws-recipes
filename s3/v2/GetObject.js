const AWS = require('aws-sdk')

const s3 = new AWS.S3();

s3.getObject({
    Bucket: 'images',
    Key: 'newfile.txt'
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
