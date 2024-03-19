import { Schema, model } from "mongoose";

const resourceSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    file: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Resource = model("Resource", resourceSchema);
export { Resource };
