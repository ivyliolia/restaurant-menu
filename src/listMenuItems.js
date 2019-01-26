import {success, failure} from '../lib/response-lib';

export async function main(event, context, callback) {
  console.log("list manu item");
  console.log("event:", JSON.stringify(event));
  console.log("context:", JSON.stringify(context));
  callback(null, success({status:"OK"}));
};
