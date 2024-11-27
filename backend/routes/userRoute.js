import express from "express";
import { createUser, getAllUsers } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", createUser);

export { userRouter };
