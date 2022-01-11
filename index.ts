import express from "express";
import config from "./config";
import morgan from "morgan";
import corsSolution from "./middleware/cors";
import routerMap from "./routes";
import mongoConnect from "./mongo/connect";

// mongoDB数据库连接
mongoConnect();

const app = express();

// 跨域中间件解决
app.use(corsSolution);
// logger
app.use(morgan("combined"));
// bodyparser
app.use(express.json());
// 路由和数据库连接测试路由，/test
app.use(routerMap.testRoute);

// focusList Router
app.use("/focusList", routerMap.focusListRoute);
// users Router
app.use("/users", routerMap.usersRoute);

app.listen(config.port, () => {
  console.log(`server is running on the port ${config.port}`);
});
