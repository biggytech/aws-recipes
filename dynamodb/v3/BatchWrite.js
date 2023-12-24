import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    RequestItems: {
        employees: [
            {
                PutRequest: {
                    Item: {
                        id: { N: "4" },
                        name: { S: "Sarah Doe" },
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        id: { N: "5" },
                        name: { S: "Julia Doe" },
                    }
                }
            },
        ]
    }
};

const run = async () => {
    try {
        const data = await client.send(new BatchWriteItemCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
};

run();
