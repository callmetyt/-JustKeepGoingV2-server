import express from "express";
import tokenVerify, { TokenVerifyObj } from "../../middleware/tokenVerify";
import { focusList } from "../../mongo";

const deleteOne = express.Router();

// token解析
deleteOne.use(tokenVerify);

deleteOne.post("/delete", async (req, res) => {
  try {
    const data = req.body;
    const tokenObj = data.tokenObj as TokenVerifyObj;
    const sqlRes = await focusList.findOneAndDelete({
      _id: data._id,
      userName: tokenObj.userName, // 这个貌似没有必要？防止非法调用接口？
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
