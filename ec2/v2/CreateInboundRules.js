const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

// inbound rules - incoming traffic
// ingress - inbound
// egress - outbound
ec2.authorizeSecurityGroupIngress({
    GroupId: 'sg-0497cda3727ea122f',
    IpPermissions: [
        {
            IpProtocol: 'tcp',
            FromPort: 80, // http
            ToPort: 80, // http       
            IpRanges: [
                {
                    CidrIp: '0.0.0.0/0',
                    Description: 'my description'
                }
            ]
        },
        {
            IpProtocol: 'tcp',
            FromPort: 22, // ssh
            ToPort: 22, // ssh   
            IpRanges: [
                {
                    CidrIp: '0.0.0.0/0',
                    Description: 'my description'
                }
            ]
        },
    ]
}, (err, data) => {
  if (err) {
    console.log('Error creating security group');
    console.error(err);
    return;
  }

  console.log('Security group created', data);
});
