import express from "express";
import add from "./add";
import deleteOne from "./deleteOne";
import show from "./show";

const focusListRoute = express.Router();

focusListRoute.use(show);
focusListRoute.use(add);
focusListRoute.use(deleteOne);

export default focusListRoute;
