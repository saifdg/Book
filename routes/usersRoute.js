const express = require("express");
const usersRoute = express.Router();
const User = require("../model/user");
//register//
usersRoute.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//login
usersRoute.post("/login", (req, res) => {
  res.send("login route");
});

//update
usersRoute.put("/register", (req, res) => {
  res.send("update route");
});

// delete
usersRoute.delete("/:id", (req, res) => {
  res.send("delete route");
});
//fetch users
usersRoute.get("/", (req, res) => {
  res.send("delete route");
});
module.exports = usersRoute;
