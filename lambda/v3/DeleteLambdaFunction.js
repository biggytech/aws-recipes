import { LambdaClient, DeleteFunctionCommand } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient();

const params = {
    FunctionName: 'my-function',
};

const run = async () => {
    try {
        const data = await lambdaClient.send(new DeleteFunctionCommand(params));
        console.log('Lambda is deleted', data);
    } catch (err) {
        console.log('Unable to delete lambda', err);
    }
};

run();
