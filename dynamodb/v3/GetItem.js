import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    TableName: 'employees',
    Key: {
        id: { N: '2' }
    }
};

const run = async () => {
    try {
        const data = await client.send(new GetItemCommand(params));
        console.log(data.Item);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
