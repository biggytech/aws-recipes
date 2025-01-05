const { DynamoDBClient, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
/**
 * ^ for v3 upload folder with node_modules and package.json
 * to lambda function
 */

const ddbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Key: {
        'id': { N: '1' }
    },
    UpdateExpression: 'SET emp_name = :n',
    ExpressionAttributeValues: {
        ':n': { S: 'updated' }
    },
    ReturnValues: 'UPDATED_NEW'
};

exports.handler = async (event) => {
    try {
        const data = await ddbClient.send(new UpdateItemCommand(params));
        console.log('Data updated:', data);
    } catch (err) {
        console.error('Unable to update:', err);
    }
};
