import { LambdaClient, GetFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient();

const params = {
    FunctionName: 'my-function',
};

const run = async () => {
    try {
        const data = await lambdaClient.send(new GetFunctionCommand(params));
        console.log('Lambda function details:', data);
    } catch (err) {
        console.error('Error getting Lambda function details:', err);
    }
};

run();
