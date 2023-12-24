import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    TableName: 'employees'
};

const run = async () => {
    try {
        const data = await client.send(new DeleteTableCommand(params));
        console.log("Table deleted", data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
