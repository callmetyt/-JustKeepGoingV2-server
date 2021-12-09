import express from "express";
import { focusList } from "../../mongo";
import { FocusListType } from "../../mongo/schema/focusList";

const add = express.Router();

add.post("/add", async (req, res) => {
  const data: FocusListType = req.body;
  const focusListData = new focusList({
    ...data,
  });

  try {
    await focusListData.save();
    res.json({
      code: 200,
      msg: "ok",
    });
  } catch (err: any) {
    res.json({
      code: 400,
      msg: err.message,
    });
  }
});

export default add;
