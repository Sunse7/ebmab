import { DynamoDbClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

export const client = new DynamoDbClient({});
export const docClient = DynamoDBDocumentClient.from(client);