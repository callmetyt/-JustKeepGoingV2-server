import express from "express";
import { focusList } from "../../mongo";

const show = express.Router();

show.get("/show", async (req, res) => {
  const sqlRes = await focusList.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
  res.json(sqlRes);
});

export default show;
