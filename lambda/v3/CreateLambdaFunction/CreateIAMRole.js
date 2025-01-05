import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

/**
 * Create a role that is able to create lambda functions
 */

const role_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
};

const params = {
    AssumeRolePolicyDocument: JSON.stringify(role_policy),
    RoleName: "lambda-role"
};

const run = async () => {
    try {
        const data = await iamClient.send(new CreateRoleCommand(params));
        console.log('Role is created', data);
    } catch (err) {
        console.error('Unable to create role', err);
    }
};

run();
