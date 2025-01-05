const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
/**
 * ^ for v3 upload folder with node_modules and package.json
 * to lambda function
 */

const ddClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Item: {
        'id': {N: '1'},
        'emp_name': {S: 'John Doe'},
    }
};

exports.handler = async (event) => {
    try {
        const data = await ddClient.send(new PutItemCommand(params));
        console.log('Data inserted',  data);
    } catch (err) {
        console.log('Unable to insert',  err);
    }
};
