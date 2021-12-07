import mongoose from "mongoose";
import config from "../config";

const { url, user, pass, dbName } = config.mongo;

export async function mongoInit() {
  const mongoDB = await mongoose
    .connect(url, {
      dbName,
      user,
      pass,
    })
    .catch((reason) => {
      console.error(reason.toString());
    });
  if (mongoDB == undefined) {
    return false;
  } else {
    return mongoDB;
  }
}

export default mongoInit;
