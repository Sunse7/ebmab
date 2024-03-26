import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { SendResponse } from "../../../responses";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../../services/db";
import { verify } from 'jsonwebtoken';

export async function handler(event) {
  const s3Client = new S3Client({});
  const secretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = event.headers?.["authorization"]?.split(' ')[1];
    const verifiedToken = verify(token, secretKey);

    if(verifiedToken) {
      const imageData = event.isBase64Encoded
        ? Buffer.from(event.body, "base64")
        : event.body;
      const contentType = event.headers?.["content-type"];
      const textData = event.headers?.["text-data"];
      const text = atob(textData); //Decode text
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
          text: text,
        },
      });

      await docClient.send(dbCommand);

      return SendResponse(200, { success: true });
    } else {
      return SendResponse(401, { success: false, message: 'Unauthorized, token not valid' });
    }

  } catch (err) {
    return SendResponse(500, {
      success: false,
      message: err.message,
    });
  }
}
