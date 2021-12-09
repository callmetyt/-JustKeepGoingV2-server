import express from "express";

const testRoute = express.Router();

testRoute.get("/test", async (req, res) => {
  res.json({
    msg: "route test success,mongo connect success",
  });
});

export default testRoute;
