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

    // putObject() for smaller objects
    s3.putObject(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    // OR upload() for bigger objects
    // s3.upload(params, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //     }
    // });

    // See: https://stackoverflow.com/questions/38442512/difference-between-upload-and-putobject-for-uploading-a-file-to-s3
};

uploadImage('data/image.png');
