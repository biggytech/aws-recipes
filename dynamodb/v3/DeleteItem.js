import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    TableName: 'employees',
    Key: {
        id: { N: '1' }
    }
};

const run = async () => {
    try {
        const data = await client.send(new DeleteItemCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
