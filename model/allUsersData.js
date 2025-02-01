const { v4: uuidv4 } = require("uuid");
let allUsers = [
  {
    id: uuidv4(),
    userName: "testUser1",
    email: "testUser1@mail.com",
  },
  {
    id: uuidv4(),
    userName: "testUser2",
    email: "testUser2@mail.com",
  },
  {
    id: uuidv4(),
    userName: "testUser3",
    email: "testUser3@mail.com",
  },
];
module.exports = allUsers;
