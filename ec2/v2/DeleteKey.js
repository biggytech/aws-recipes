const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.deleteKeyPair({
    KeyName: 'mykey',
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
