import { User } from "../model/user.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
      name: "gereltbaatar1",
      email: "mglgerelt@gmail.com",
      password: "gerelt1234",
      phoneNumber: 85910226,
    });

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log("Create user data failed");
  }
};

const getAllUsers = async (request, response) => {
  try {
    const result = await User.find({});

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log("Fetch user data failed");
  }
};

const deleteUser = async (request, response) => {
  try {
    const result = await User.findByIdAndDelete({
      _id: "674403aedb26f09c11694e78",
    });

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log("Delete user in failed");
  }
};

export { createUser, getAllUsers, deleteUser };
