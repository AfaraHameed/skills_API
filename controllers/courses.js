
const pool = require('../config/db')
const courseQueries = require('../queries/courses')
//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = (req, res, next) => {
  pool.query(courseQueries.getAllProducts,(error,results)=>{
    if(error) throw error
    res.status(200).json(results.rows)
  })
};
//@desc to course by id
//@route '/api/v1/courses/:id
//access public
getSingleCourses = (req, res, next) => {
  const id = req.params.id
  pool.query(courseQueries.getSingleCourse,[id],(error,result)=>{
    if(error) throw error
    res.status(200).json(result.rows)
  })
};
createCourse = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: { id: 1, messgae: "Created courses" } });
};

updateCourse = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: { id: 1, messgae: `updated courses ${req.params.id}` },
    });
};
deleteCourse = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: { id: 1, messgae: `deleted courses ${req.params.id}` },
    });
};
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
