import mongoose from "mongoose";
import focusListSchema, { FocusListType } from "./schema/focusList";

export const focusList = mongoose.model<FocusListType>(
  "focusList",
  focusListSchema,
  "focusList"
);
