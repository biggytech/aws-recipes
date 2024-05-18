const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.describeSecurityGroups((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ec2.describeSecurityGroupRules((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
