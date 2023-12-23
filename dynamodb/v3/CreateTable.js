import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'us-east-1' });
// or use env variable instead: AWS_SDK_LOAD_CONFIG=1 (to load local config)

const params = {
    TableName: 'employees',
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'N'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3
    }
};

const run = async () => {
    try {
        const data = await client.send(new CreateTableCommand(params));
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

run();
