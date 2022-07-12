const connectDB = require('./config/db');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config({path:"./config/.env"});

//DATABASE
connectDB();

  //Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//Routes 
const UsersRoutes = require("./routes/usersRoute");

//PORT
const port = process.env.PORT || 8080;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});