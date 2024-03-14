import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { SendResponse } from "../../../responses";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../../services/db";

export async function handler(event) {
  const s3Client = new S3Client({});

  try {
    const imageData = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;
    const contentType = event.headers?.["content-type"];
    const textData = event.headers?.["text-data"];
    const id = uuidv4();

    const s3Command = new PutObjectCommand({
      Bucket: "ebmab-bucket",
      Key: id,
      Body: imageData,
      ContentType: contentType,
    });

    await s3Client.send(s3Command);

    const dbCommand = new PutCommand({
      TableName: "imageDb",
      Item: {
        id: id,
        url: `https://ebmab-bucket.s3.eu-north-1.amazonaws.com/${id}`,
        text: textData,
      },
    });

    await docClient.send(dbCommand);

    return SendResponse(200, { success: true });
  } catch (err) {
    return SendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
