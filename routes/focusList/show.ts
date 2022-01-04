import express from "express";
import { focusList } from "../../mongo";

const show = express.Router();

show.get("/show", async (req, res) => {
  try {
    const sqlRes = await focusList.find(
      {},
      {
        __v: 0,
      }
    );
    res.json({
      code: 200,
      list: sqlRes,
    });
  } catch (err: any) {
    res.json({
      code: 400,
      msg: err.message,
    });
  }
});

export default show;
