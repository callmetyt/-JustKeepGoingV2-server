import mongoose from "mongoose";
import config from "../config";

const { url, user, pass, dbName } = config.mongo;

// 给默认连接监听事件
mongoose.connection.on("connected", () => {
  console.log("mongodb default connection connected!");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongodb default connection disconnected!");
});

export function mongoConnect() {
  mongoose
    .connect(url, {
      dbName,
      user,
      pass,
    })
    .catch((reason) => {
      console.error(reason.toString());
      process.exit(1);
    });
}

export default mongoConnect;
