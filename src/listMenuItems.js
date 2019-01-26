import * as dynamoDB from '../lib/dynamodb-lib';
import {success, failure} from '../lib/response-lib';

export async function main(event, context, callback) {
  const params = {
    TableName: "restaurant",
    Key: {
      id: event.pathParameters.id,
    },
  };
  try {
    const result = await dynamoDB.call("get", params);
    console.log("result:", JSON.stringify(result));
    callback(null, success(result.Item.menu));
  } catch (error) {
    console.log(error);
    callback(null, failure({ status: false }));
  };
};
