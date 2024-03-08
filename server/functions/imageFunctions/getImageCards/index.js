import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { docClient } from '../../../services/db';
import { SendResponse } from '../../../responses';

export async function handler() {
    try {
        const command = new ScanCommand({
            TableName: "imageDb"
        });
        const response = await docClient.send(command);
        return SendResponse(200, {success: true, images: response.Items});
    } catch (err) {
        return SendResponse(err.statusCode, {
            success: false, message: err.message
        });
    }
}