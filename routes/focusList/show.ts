import express from "express";
import tokenVerify, { TokenVerifyObj } from "../../middleware/tokenVerify";
import { focusList } from "../../mongo";

const show = express.Router();

// token解析
show.use(tokenVerify);

show.post("/show", async (req, res) => {
  const tokenObj = req.body.tokenObj as TokenVerifyObj;
  try {
    const sqlRes = await focusList.find(
      {
        userName: tokenObj.userName,
      },
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
