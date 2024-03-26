import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../../services/db";
import { SendResponse } from "../../../responses";
import { hashPassword } from "../../password/hashPassword";

export async function handler(event) {
  const { email, password } = JSON.parse(event.body);

  try {
    const dbCommand = new PutCommand({
      TableName: "userDb",
      Item: {
        email: email,
        password: hashPassword(password),
        isAdmin: true,
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
