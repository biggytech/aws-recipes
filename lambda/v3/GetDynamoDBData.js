const { DynamoDBClient, GetItemCommand } = require('@aws-sdk/client-dynamodb');
/**
 * ^ for v3 upload folder with node_modules and package.json
 * to lambda function
 */

const ddbClient = new DynamoDBClient();

const params = {
    TableName: 'Employee',
    Key: {
        'id': { N: '1' }
    }
};

exports.handler = async (event) => {
    try {
        const data = await ddbClient.send(new GetItemCommand(params));
        const items = data.Item;

        console.log(items);
    } catch (err) {
        console.error(err);
    }
};
