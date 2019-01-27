import AWS from 'aws-sdk';

AWS.config.update({
  /*
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  */
  region: "us-west-1",
});

export function call(action, params) {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  return dynamoDB[action](params).promise();
};

