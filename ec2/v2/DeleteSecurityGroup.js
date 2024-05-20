const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.deleteSecurityGroup({
    GroupId: 'sg-0497cda3727ea122f',
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
