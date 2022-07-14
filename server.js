const connectDB = require('./config/db');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UsersRoute = require("./routes/usersRoute");
const error = require('./middlewares/errorMiddlewaresHandler');
const bookRouter = require('./routes/bookRoutes');
require("dotenv").config({path:"./config/.env"});

//DATABASE
connectDB();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Routes
app.use('/api/users',UsersRoute);
app.use('/api/books',bookRouter);
//Routes 

// error middleware
app.use(error.errorMiddlewareHandler);
//PORT
const port = process.env.PORT || 8080;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});