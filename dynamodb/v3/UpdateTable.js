import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    TableName: 'employees',
};

const run = async () => {
    try {
        const data = await client.send(new UpdateTableCommand(params));
        console.log("Success", data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
