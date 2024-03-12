import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { SendResponse } from '../../../responses';

export async function handler(event) {
    const bucketName = process.env.S3_BUCKET_NAME;

    console.log('EVENT: ', event);
 
    const imageData = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body;
    const contentType = event.headers?.['content-type'];

    const id = uuidv4();
    const client = new S3Client({});

    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: id,
        Body: imageData,
        ContentType: contentType
    });

    const response = await client.send(command);
    console.log('RESPONSE: ', response);
    SendResponse(200, { success: true });
}