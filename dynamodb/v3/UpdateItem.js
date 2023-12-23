import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const table = 'employees';

const params = {
    TableName: table,
    Key: {
        id: { N: '1' }
    },
    UpdateExpression: 'set name = :name',
    ExpressionAttributeValues: {
        ':name': { S: 'Hanna Doe' }
    },
    ReturnValues: 'UPDATED_NEW'
};

const run = async () => {
    try {
        const data = await client.send(new UpdateItemCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
