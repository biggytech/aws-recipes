import { EC2Client, RunInstancesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

// this script installs Apache web server on Amazon Linux 2 instance
// and creates a simple HTML file
// to check the result, open the public IP of the instance in a browser
const userData = `
#!/bin/bash
yum update -y
yum install -y httpd
chkconfig httpd on
service httpd start
echo "<html><body><h1>Hello from EC2 instance</h1></body></html>" > /var/www/html/index.html
`;

const userDataEncoded = new Buffer(userData).toString('base64');

const run = async () => {
    try {
        const data = await ec2Client.send(
            new RunInstancesCommand({
                ImageId: 'ami-0b5eea76982371e91', // Amazon Linux 2 AMI
                MinCount: 1,
                MaxCount: 1,
                InstanceType: 't2.micro', // free tier
                KeyName: 'mykey', // previously created key pair
                SecurityGroups: ['launch-wizard-1'], // previously created security group name
                UserData: userDataEncoded // user script run on instance launch
            }));
        console.log('Instance created', data);
    } catch (err) {
        console.error(err);
    }
};

run();
