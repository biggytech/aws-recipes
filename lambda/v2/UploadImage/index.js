const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

/**
 * Zip this folder and upload it to AWS Lambda
 * together with the image.png file zipped inside of the folder
 */

exports.handler = (event) => {
    const fileContent = fs.readFileSync('image.png');

    const params = {
        Bucket: 'my-bucket',
        ACL: 'public-read',
        Key: 'image.png',
        Body: fileContent
    };

    s3.putObject(params, (err, data) => {
       if (err) {
           console.log(err);
       } else {
           console.log('Image uploaded successfully', data);
       }
    });
};
