import express from "express";
import mongoInit from "../mongo";

const testRoute = express.Router();
testRoute.get("/", async (req, res) => {
  const mongoDB = await mongoInit();
  if (mongoDB) {
    res.json({
      msg: "router test ok! mongoDB connect ok!",
    });
  } else {
    res.json({
      msg: "router test ok!mongoDb connect Error",
    });
  }
});

export default testRoute;
