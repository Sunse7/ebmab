import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export async function handler(event) {
    console.log('Body: ', event.body);

    const client = new S3Client({});

    const command = new PutObjectCommand({
        Bucket: '',
        Key: '',
        Body: event.body
    });

    const response = await client.send(command);
    console.log('resp', response);
}