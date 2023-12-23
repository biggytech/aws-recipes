import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const params = {
    TableName: 'employees'
};

const run = async () => {
    try {
        const data = await client.send(new DescribeTableCommand(params));
        console.log(data);
    } catch (err) {
        console.log("Error", err);
    }
}

run();
