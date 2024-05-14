const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({ region: 'us-east-1' });
// or export AWS_SDK_LOAD_CONFIG=1

const ec2 = new AWS.EC2();

ec2.createKeyPair({
    KeyName: 'mykey',
    KeyType: 'rsa'
}, (err, data) => {
  if (err) {
    console.log('Error creating key pair');
    console.error(err);
    return;
  }

  fs.writeFile('mykey.pem', data.KeyMaterial, (err) => {
    if (err) {
        console.log('Error writing key to file');
        console.error(err);
        return;
    }

    console.log('Key pair created');
  });
});
