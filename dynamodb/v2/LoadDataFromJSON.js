const AWS = require('aws-sdk')
const fs = require('fs');

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
// The document client affords developers the use of native JavaScript types
// instead of AttributeValues to simplify the JavaScript development
// experience with Amazon DynamoDB. JavaScript objects passed in
// as parameters are marshalled into AttributeValue shapes required
// by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into
// plain JavaScript objects by the DocumentClient. The DocumentClient,
// does not accept AttributeValues in favor of native JavaScript types.
const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies data');

const allMovies = JSON.parse(fs.readFileSync('./data/moviedata.json', 'utf-8'));
allMovies.forEach((movie => {
  const params = {
    TableName: 'movies',
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info
    }
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  })
}));