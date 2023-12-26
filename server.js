const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const cors = require('cors')
const path = require('path');
// const multer = require('multer')
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
const reportFilePath = path.join(__dirname,"reports/sales_report.pdf")
console.log(reportFilePath);
const users = require("./routes/users");
const courses = require("./routes/courses");
const profile = require("./routes/profile")
const downloadFile = require('./routes/download_file')
app.use("/api/v1/users", users);
app.use("/api/v1/courses", courses);
app.use('/profile',profile)
app.use('/api/sales-report/pdf',downloadFile)


app.use(errorHandler);
app.use(express.static('public'))


