let allUsers = require("../model/allUsersData");
const { v4: uuidv4 } = require("uuid");

// Get All Users
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    allUsers,
  });
};

// Get a User
exports.getAUser = (req, res) => {
  let getUserID = req.params.id;
  if (getUserID) {
    allUsers.filter((user) => {
      if (user.id === getUserID) {
        res.status(200).json({
          user,
        });
      }
    });
  } else {
    res.status(500).json({
      message: "Please add a User ID",
    });
  }
};

// Create a User
exports.createAUser = (req, res) => {
  if (req.body.userName && req.body.email) {
    let newUser = {
      id: uuidv4(),
      userName: req.body.userName,
      email: req.body.email,
    };

    allUsers.push(newUser);

    res.status(201).json({
      message: `User Created Successfully: ID: ${newUser.id}, UserName: ${newUser.userName}, email: ${newUser.email}`,
    });
  } else {
    res.status(500).json({
      message: "Failed To Create a User",
    });
  }
};

// Update a User
exports.updateAUser = (req, res) => {
  if (req.params.id) {
    allUsers.filter((user) => {
      if (user.id === req.params.id && req.body.userName && req.body.email) {
        user.userName = req.body.userName;
        user.email = req.body.email;
        res.status(200).json({
          message: "User Updated",
        });
      }
    });
  } else {
    res.status(500).json({
      message: "Failed To Update",
    });
  }
};

exports.deleteAUser = (req, res) => {
  if (req.params.id) {
    allUsers.filter((user) => {
      if (user.id === req.params.id) {
        allUsers.splice(allUsers.indexOf(user), 1);
        res.status(200).json({
          message: "User Deleted",
        });
      }
    });
  } else {
    res.status(500).json({
      message: "Failed to Delete",
    });
  }
};
