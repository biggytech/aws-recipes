const { DynamoDBClient, CreateTableCommand } = require('@aws-sdk/client-dynamodb');
/**
 * ^ for v3 upload folder with node_modules and package.json
 * to lambda function
 */

const ddbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'N' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
    },
};

exports.handler = async (event) => {
    try {
        const data = await ddbClient.send(new CreateTableCommand(params));
        console.log('Table created successfully:', data);
    } catch (err) {
        console.log('Error creating table:', err);
    }
}
