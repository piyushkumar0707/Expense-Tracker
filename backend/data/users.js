const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    email: "test@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "user"
  },
  {
    id: 2,
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin"
  }
];

module.exports = users;
