import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const run = async () => {
    try {
        const data = await client.send(new ListTablesCommand({}));
        console.log("Success", data.TableNames);
    } catch (err) {
        console.log("Error", err);
    }
}

run();
