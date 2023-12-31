const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

const uploadImage = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: 'images',
        ACL: 'private', // 'public-read'
        Key: fileName,
        Body: fileContent
    };

    s3.putObject(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};

uploadImage('data/image.png');
