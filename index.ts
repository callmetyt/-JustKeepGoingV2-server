import express from "express";
import config from "./config";
import corsSolution from "./routes/cors";
import testRoute from "./routes/test";

const app = express();

app.use(corsSolution);
app.use(testRoute);

app.listen(config.port, () => {
  console.log(`server is running on the port ${config.port}`);
});
