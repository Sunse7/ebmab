import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../../services/db";
import { SendResponse } from "../../../responses";

export async function handler(event) {
  const s3Client = new S3Client({});

  try {
    const id = JSON.parse(event.body).id;

    const s3Command = new DeleteObjectCommand({
      Bucket: "ebmab-bucket",
      Key: id,
    });

    await s3Client.send(s3Command);

    const dbCommand = new DeleteCommand({
      TableName: "imageDb",
      Key: {
        id: id,
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
