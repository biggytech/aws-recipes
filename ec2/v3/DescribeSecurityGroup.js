import {
    EC2Client,
    DescribeSecurityGroupsCommand,
    DescribeSecurityGroupRulesCommand
 } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client();

const run = async () => {
    try {
        const data = await ec2Client.send(
            new DescribeSecurityGroupsCommand({})
        );
        console.log('Security groups found', data.SecurityGroups);

        const rules = await ec2Client.send(
            new DescribeSecurityGroupRulesCommand({})
        );
        console.log('Security group rules found', rules.SecurityGroupRules);
    } catch (err) {
        console.error(err);
    }
};

run();
