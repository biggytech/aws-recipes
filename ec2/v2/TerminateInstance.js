const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.terminateInstances({
    InstanceIds: [
        'i-064c3011f90c7e4c8'
    ]
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
