const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

ec2.runInstances({
    ImageId: 'ami-0c02fb55956c7d316', // Amazon Linux
    MinCount: 1,
    MaxCount: 1,
    InstanceType: 't2.micro', // free tier
    KeyName: 'mykey', // previously created key pair
    SecurityGroups: ['sdksecurity'], // previously created security group
}, (err, data) => {
  if (err) {
    console.log('Error creating instance');
    console.error(err);
    return;
  }

  console.log('Instance created', data);
});
