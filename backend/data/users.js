const bcrpty = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrpty.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrpty.hashSync("123456", 10),
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrpty.hashSync("123456", 10),
  },
];

module.exports = users;
