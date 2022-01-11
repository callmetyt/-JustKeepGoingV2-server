import { Schema } from "mongoose";

const UsersSchema = new Schema<UsersType>({
  userName: {
    type: String,
    required: [true, "没有用户名"],
  },
  password: {
    type: String,
    required: [true, "没有密码"],
  },
});

export interface UsersType {
  userName: string;
  password: string;
}

export default UsersSchema;
