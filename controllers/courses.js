
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
  const {duration,title} = req.body
  pool.query(courseQueries.createCourse,[duration,title],(error,result)=>{
    if(error) throw error;
    res.status(201).json({message:"created new course successfully"})
  })
};

updateCourse = (req, res, next) => {
  const {duration,title} = req.body
  const id = req.params.id
  pool.query(courseQueries.updateCourse,[duration,title,id],(error,result)=>{
    if(error) throw error;
    res.status(200).json({message:"updated successfully"})
  })
};
deleteCourse = (req, res, next) => {
  const id = req.params.id
  pool.query(courseQueries.deleteCourse,[id],(error,result)=>{
    if(error) throw error;
    res.status(200).json({message:"deleted successfully"})
  })
};
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
