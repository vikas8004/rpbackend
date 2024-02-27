import ReceitpNo from "../../models/fee/receiptNo.model.js";

const receiptController = async (req, res) => {
  ReceitpNo.create({
    recNo: 0,
  });
};

export default receiptController;
