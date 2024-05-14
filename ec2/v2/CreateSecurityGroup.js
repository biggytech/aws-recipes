const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.createSecurityGroup({
    Description: 'My security group',
    GroupName: 'sdksecurity'
}, (err, data) => {
  if (err) {
    console.log('Error creating security group');
    console.error(err);
    return;
  }

  console.log('Security group created', data);
});
