import { Schema, model } from "mongoose";

const receiptNoSchema = new Schema({
  recNo: {
    type: Number,
    default: 0,
  },
});

const ReceitpNo = model("ReceiptNo", receiptNoSchema);
export default ReceitpNo;
