import { Schema } from "mongoose";

const focusListSchema = new Schema<FocusListType>({
  aim: {
    type: String,
    required: [true, "没有填写目的"],
  },
  startDate: {
    type: Number,
    required: [true, "没有开始时间"],
  },
  endDate: {
    type: Number,
    required: [true, "没有结束时间"],
  },
  userName: {
    type: String,
    required: [true, "没有归属用户"],
  },
});

export interface FocusListType {
  aim: string;
  startDate: number;
  endDate: number;
  userName: string;
}

export default focusListSchema;
