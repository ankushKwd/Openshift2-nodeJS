const mongoose = require("mongoose");
const usersSchema = require("./Schemas").usersSchema;
const usersData = mongoose.model("users", usersSchema);

const getUsers = async (request, response) => {
  const users = [];
  await usersData.find().then((p) => users.push(...p));
  response.json(users);
};

const createUser = (request, response) => {
  if (request.body) {
    usersData.create({
      name: request.body.name,
      surname: request.body.surname,
    });
  }
  response.status(201).send("Created Succesfully");
};

module.exports = {
  getUsers,
  createUser,
};
