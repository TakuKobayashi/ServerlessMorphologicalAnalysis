import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { generateUuid } from '../libs/util'

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const uuid = generateUuid();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      uuid: uuid,
      env: process.env,
    }, null, 2),
  };
}
