const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
var cors = require('cors')
dotenv.config({ path: "./config/config.env" });
const app = express();

// const logger = (req,res,next)=>{
//   console.log(`Request made to ${req.method} at ${req.protocol}://${req.host}${req.url}`);
//   next()
// }
var corsOption = {
  origin:'http://127.0.0.1:5500'
}
app.use(cors(corsOption))
app.use(logger);
app.use(express.json());
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
// Routes
const users = require("./routes/users");
const courses = require("./routes/courses");
app.use("/api/v1/users", users);
app.use("/api/v1/courses", courses);
app.use(errorHandler);
