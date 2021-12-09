import { Schema } from "mongoose";

const focusListSchema = new Schema<FocusListType>({
  aim: {
    type: String,
    required: [true, "没有填写目的(aim)"],
  },
  startDate: {
    type: Date,
    required: [true, "没有开始时间(startDate)"],
  },
  focusTime: {
    type: Number,
    required: [true, "没有专注时长(focusTime)"],
  },
});

export interface FocusListType {
  aim: string;
  startDate: Date;
  focusTime: number;
}

export default focusListSchema;
