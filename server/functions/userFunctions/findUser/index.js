import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../../services/db";
import { verifyPassword } from "../../password/verifyPassword";
import { SendResponse } from "../../../responses";
import { sign } from 'jsonwebtoken';

export async function handler(event) {
    const secretKey = process.env.JWT_SECRET_KEY;
    const { email, password } = JSON.parse(event.body);

    try {
        const dbCommand = new GetCommand({
            TableName: 'userDb',
            Key: {
                email: email
            }
        });
        const response = await docClient.send(dbCommand);
        const isPasswordMatch = verifyPassword(password, response.Item.password);

        if (isPasswordMatch) {
            const payload = {
                email: response.Item.email,
                isAdmin: response.Item.isAdmin
            }
            const token = sign(payload, secretKey,  { expiresIn: '1h' });
            return SendResponse(200, { success: true, token });
        } else {
            return SendResponse(400, { success: false, message: 'Wrong password' });
        }
    } catch (err) {
        return SendResponse(err.statusCode, { success: false, message: err.message });
    }
}