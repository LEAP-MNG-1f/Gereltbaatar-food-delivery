import { User } from "../model/index.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Dashka",
    email: "Dashka@gmail.com",
    password: "Dashka1234",
    phoneNumber: 99118899,
  });

  response.json({
    succes: true,
    data: result,
  });
};

const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    succes: true,
    data: result,
  });
};

export { createUser, getAllUsers };
