import { Schema } from "mongoose";

const focusListSchema = new Schema<FocusListType>({
  aim: {
    type: String,
    required: [true, "没有填写目的(aim)"],
  },
  startDate: {
    type: Number,
    required: [true, "没有开始时间(startDate)"],
  },
  endDate: {
    type: Number,
    required: [true, "没有结束时间(endDate)"],
  },
});

export interface FocusListType {
  aim: string;
  startDate: number;
  endDate: number;
}

export default focusListSchema;
