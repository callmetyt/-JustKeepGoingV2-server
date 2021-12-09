import express from "express";
import add from "./add";
import show from "./show";

const focusListRoute = express.Router();

focusListRoute.use(show);
focusListRoute.use(add);

export default focusListRoute;
