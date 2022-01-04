import express from "express";
import { focusList } from "../../mongo";

const deleteOne = express.Router();

deleteOne.post("/delete", async (req, res) => {
  try {
    const data = req.body;
    const sqlRes = await focusList.findOneAndDelete({
      _id: data._id,
    });
    res.json({
      code: 200,
      deleteData: sqlRes,
    });
  } catch (err: any) {
    res.json({
      code: 400,
      msg: err.message,
    });
  }
});

export default deleteOne;
