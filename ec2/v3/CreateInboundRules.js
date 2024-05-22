import { EC2Client, AuthorizeSecurityGroupIngressCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new AuthorizeSecurityGroupIngressCommand({
                GroupId: 'sg-033e96e0c360744dc', // group to assign rules to
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
            }));
        console.log('Rules assigned', data);
    } catch (err) {
        console.error(err);
    }
};

run();
