import express from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", createUser);
userRouter.delete("/users", deleteUser);

export default userRouter;
