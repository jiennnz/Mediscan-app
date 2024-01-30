import mongoose, { Model, Document } from "mongoose";

// Define the interface for the User document
interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  // Other fields if any
}

// Define the schema for the User model
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Define and export the User model
let User: Model<UserDocument>;

try {
  // Try to retrieve the existing model
  User = mongoose.model<UserDocument>("User");
} catch {
  // If the model doesn't exist, define it
  User = mongoose.model<UserDocument>("User", UserSchema);
}

export default User;
