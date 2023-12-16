const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

const logger = (req,res,next)=>{
  console.log(`Request made to ${req.method} at ${req.protocol}://${req.host}${req.url}`);
  next()
}

app.use(logger)
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`running in ${process.env.NODE_ENV} on ${port}`);
});
const courses = require("./routes/courses");
app.use("/api/v1/courses", courses);
// app.get('/',(req,res)=>{
//     //res.send("<h1>Hello World</h1>")
//     res.status(200).json({success:true,data:[{id:'1',name:"afara"}]})
// })
