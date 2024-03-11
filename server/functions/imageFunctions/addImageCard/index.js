import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export async function handler(event) {
    const bucketName = process.env.S3_BUCKET_NAME;

    console.log('EVENT: ', event);

    const client = new S3Client({});

    const command = new PutObjectCommand({
        Bucket: 'ebmab-bucket',
        Key: 'some-key',
        Body: event.body
    });

    const response = await client.send(command);
    console.log('RESPONSE: ', response);
}