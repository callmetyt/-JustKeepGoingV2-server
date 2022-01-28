import express from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const tokenVerify = express.Router();

export interface TokenVerifyObj {
  token: string;
  userName: string;
  iat: number;
}

tokenVerify.post("*", (req, res, next) => {
  const token = req.body?.token;
  if (token) {
    let tokenObj: TokenVerifyObj = { userName: "", iat: 0, token };
    try {
      tokenObj = jwt.verify(token, config.jwtSercet) as TokenVerifyObj;
    } catch (e) {
      console.error(e);
      res.json({
        code: 400,
        msg: "token错误，请重新登录",
      });
    }
    const oldBody = req.body;
    req.body = {
      ...oldBody,
      tokenObj,
    };
    next();
  } else {
    res.json({
      code: 400,
      msg: "未传入token，请尝试重新登录",
    });
  }
});

export default tokenVerify;
