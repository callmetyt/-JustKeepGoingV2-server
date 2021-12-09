import express from "express";

const corsSolution = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept "
  );
  res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  req.method === "OPTIONS" ? res.status(200).end() : next();
};
export default corsSolution;
