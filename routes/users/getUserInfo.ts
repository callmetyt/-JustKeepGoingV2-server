import express from "express";
import tokenVerify, { TokenVerifyObj } from "../../middleware/tokenVerify";
import { users } from "../../mongo";

const getUserInfo = express.Router();

getUserInfo.use(tokenVerify);

getUserInfo.post("/getUserInfo", async (req, res) => {
  const tokenObj = req.body.tokenObj as TokenVerifyObj;
  const sqlRes = await users.findOne(
    {
      userName: tokenObj.userName,
    },
    {
      _id: 0,
      _v: 0,
      password: 0,
    }
  );
  if (sqlRes) {
    res.json({
      code: 200,
      userName: sqlRes.userName,
      token: tokenObj.token,
    });
  } else {
    res.json({
      code: 400,
      msg: "token错误，请重新登录",
    });
  }
});

export default getUserInfo;
