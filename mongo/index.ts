import mongoose from "mongoose";
import focusListSchema, { FocusListType } from "./schema/focusList";
import UsersSchema, { UsersType } from "./schema/users";

export const focusList = mongoose.model<FocusListType>(
  "focusList",
  focusListSchema,
  "focusList"
);

export const users = mongoose.model<UsersType>("users", UsersSchema, "users");
