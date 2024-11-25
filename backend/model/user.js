import mongoose from "mongoose";

// const roleEnum = {
//   value: ["admin", "user"],
// };

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

export const User = mongoose.model("User", userSchema);
