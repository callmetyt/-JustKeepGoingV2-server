import express from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { users } from "../../mongo";
import { UsersType } from "../../mongo/schema/users";

const login = express.Router();

login.post("/login", async (req, res) => {
  const data: UsersType = req.body;
  const sqlRes = await users.findOne({
    userName: data.userName,
    password: data.password,
  });

  if (sqlRes) {
    const token = jwt.sign(
      {
        userName: data.userName,
      },
      config.jwtSercet
    );
    res.json({
      code: 200,
      token,
    });
  } else {
    res.json({
      code: 400,
      msg: "用户名或密码错误",
    });
  }
});

export default login;
