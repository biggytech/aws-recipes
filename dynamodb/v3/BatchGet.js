import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    RequestItems: {
        employees: {
            Keys: [
                {
                    id: { "N": "1" }
                },
                {
                    id: { "N": "2" }
                }
            ]
        }
    }
};

const run = async () => {
    try {
        const data = await client.send(new BatchGetItemCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
