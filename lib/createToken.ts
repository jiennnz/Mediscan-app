import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

type UserDataType = {
  id: ObjectId;
  username: string;
  email: string;
};

export function createToken(userData: UserDataType) {
  const tokenData = {
    id: userData.id.toString(), // Convert ObjectId to string
    username: userData.username,
    email: userData.email,
  };

  const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    expiresIn: "30seconds",
  });

  return token;
}
