import * as dynamoDB from '../lib/dynamodb-lib';
import {success, failure} from '../lib/response-lib';
import { Pool, Client } from 'pg';

export async function main(event, context, callback) {
  // https://github.com/brianc/node-postgres/issues/930#issuecomment-230362178
  context.callbackWaitsForEmptyEventLoop = false;
  const resp = await query(event.pathParameters.id);
  let result = [];
  resp.forEach(item => {
    result.push(item.item.trim());
  });
  callback(null, success(result));
};

async function query(restaurant) {
  const pool = new Pool({
    user: 'ivyliolia',
    host: 'restaurant.cagjw9yt9inr.us-west-1.rds.amazonaws.com',
    database: 'restaurant',
    password: 'f56gEGbYu3P9NAe',
    port: 5432,
    max: 1,
    min: 0,
    idleTimeoutMillis: 120000,
    connectionTimeoutMillis: 10000,
  });
  const client = await pool.connect();

  let res;
  const q = `SELECT * FROM menuItem WHERE id = '${restaurant}'`;
  try {
    try {
      res = await client.query(q);
    } catch (err) {
      throw err;
    }
  } finally {
    client.release(true);
  }
  return res.rows;
};
