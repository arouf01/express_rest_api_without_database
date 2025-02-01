const {
  getAllUsers,
  createAUser,
  updateAUser,
  deleteAUser,
  getAUser,
} = require("../controller/userController");

const usersRouter = require("express").Router();

// Get All Users
usersRouter.get("/", getAllUsers);

// Get a User
usersRouter.get("/:id", getAUser);

// Create a New User
usersRouter.post("/", createAUser);

// Update a User
usersRouter.put("/:id", updateAUser);

// Delete a user
usersRouter.delete("/:id", deleteAUser);

module.exports = usersRouter;
