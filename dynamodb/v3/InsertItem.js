import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    TableName: 'employees',
    Item: {
        id: { N: '1' }, // number, but it should be added as string
        name: { S: 'John Doe' },
    }
};

const run = async () => {
    try {
        const data = await client.send(new PutItemCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
