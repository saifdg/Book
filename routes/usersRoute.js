const express = require("express");
const asyncHandler = require("express-async-handler");
const authMiddlware = require("../middlewares/authMiddlware");
const expressAsyncHandler = require("express-async-handler");
const usersRoute = express.Router();
const User = require("../model/User");
const generateToken = require("../utils/generateToken");

//register//
//usersRoute.post("/register", async (req, res) => {
//try {
//const { name, email,role, password } =req.body;
//const user = await User.create({ name, email,role, password });
//console.log(user);
//res.send(user);
// } catch (error) {
// res.send(error);
//}
//});

//register//
usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, role, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User Exist");
    }
    const userCreated = await User.create({ name, email, role, password });
    const decodedToken = {
      _id: userCreated._id,
      name: userCreated.name,
      role: userCreated.role,
      password: userCreated.password,
      email: userCreated.password,
    };
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      role: userCreated.role,
      password: userCreated.password,
      email: userCreated.password,
      token: generateToken(decodedToken),
    });
  })
);

//login
usersRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);
      const decodedToken={
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      }
      res.json({
        _id: user._id,
        name: user.name,
        role: user.role,
        password: user.password,
        email: user.email,
        token: generateToken(decodedToken),
      });
      //res.send(user)
    } else {
      //res.send('User not found');
      res.status(401);
      throw new Error("Invalid");
    }
  })
);

// @route Get api/user/:id
// @desc Get user by id
// @access Private
usersRoute.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "Utilisateur introuvable" });
    }
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Utilisateur introuvable" });
    }
  }
});

//update user
usersRoute.put(
  "/:id",
  authMiddlware,
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(user);
    } catch (error) {
      res.status(500);
      throw new Error("Update failed");
    }
  })
);

//update
//usersRoute.put("/update",authMiddlware,(req, res) => {
//res.send("update route");
//});

// delete
//usersRoute.delete("/:id", (req, res) => {
//res.send("delete route");
//});

usersRoute.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(user);
    } catch (erro) {
      res.json(error);
    }
  })
);

//fetch users
usersRoute.get('/', expressAsyncHandler(async(req,res)=>{

  const user= await User.find({});
  if(user){
      res.status(200);
      res.json(user);
  }
  else{
      res.status(500);
      throw new Error('There are no books');

  }
}))
module.exports = usersRoute;
