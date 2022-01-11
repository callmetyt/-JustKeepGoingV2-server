import express from "express";
import tokenVerify, { TokenVerifyObj } from "../../middleware/tokenVerify";
import { focusList } from "../../mongo";
import { FocusListType } from "../../mongo/schema/focusList";

const add = express.Router();

// 解析token
add.use(tokenVerify);

add.post("/add", async (req, res) => {
  const data: { aim: string; startDate: number; endDate: number } & {
    tokenObj: TokenVerifyObj;
  } = req.body;
  const focusListData = new focusList({
    aim: data.aim,
    startDate: data.startDate,
    endDate: data.endDate,
    userName: data.tokenObj.userName,
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
