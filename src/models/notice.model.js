import { Schema, model } from "mongoose";

const noticeSchema = new Schema(
  {
    notice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notice = model("Notice", noticeSchema);

export { Notice };
