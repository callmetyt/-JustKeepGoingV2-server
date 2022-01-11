import express from "express";
import login from "./login";

const usersRoute = express.Router();

usersRoute.use(login);

export default usersRoute;
