import express from "express";
import getUserInfo from "./getUserInfo";
import login from "./login";

const usersRoute = express.Router();

usersRoute.use(login);
usersRoute.use(getUserInfo);

export default usersRoute;
