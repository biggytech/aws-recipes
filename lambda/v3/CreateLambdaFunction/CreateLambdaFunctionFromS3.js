import { LambdaClient, CreateFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient();

const params = {
    Code: {
        S3Bucket: 'my-bucket',
        S3Key: 'lambda.zip'
    },
    FunctionName: 'my-function',
    Runtime: 'nodejs14.x',
    Role: 'arn:aws:iam::123456789012:role/lambda-role',
    Handler: 'index.handler',
    Timeout: 300,
};

const run = async () => {
    try {
        const data = await lambdaClient.send(new CreateFunctionCommand(params));
        console.log('Lambda function created:', data);
    } catch (err) {
        console.error('Error creating Lambda function:', err);
    }
};

run();
