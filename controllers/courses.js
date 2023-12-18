const ErrorResponse = require('../utils/errorResponse')
const courseRepository = require("../repositories/course");
//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = async (req, res, next) => {
  try {
    const courses = await courseRepository.getAllCourses();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    next(error);
  }
};
//@desc to course by id
//@route '/api/v1/courses/:id
//access public
getSingleCourses = async (req, res, next) => {
  const id = req.params.id;
  try {
    const course = await courseRepository.getCourseBiId(id);
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};
createCourse = async (req, res, next) => {
  const { duration, title } = req.body;
  try {
    const created = await courseRepository.addNewProduct(duration, title);
    if (created) {
      res.status(201).json({
        success: true,
        data: { message: "created course successfully" },
      });
    }
  } catch (error) {
    next(error);
  }
};

updateCourse = async (req, res, next) => {
  const { duration, title } = req.body;
  const id = req.params.id;
  try {
    const existsRecord = await courseRepository.checkRecordExists(id);
    if (existsRecord) {
      const updated = await courseRepository.updateCourse(duration, title, id);
      if (updated) {
        res.status(200).json({
          success: true,
          data: { message: `product with id ${id} updated successfully` },
        });
      }
    } else {
      next(new ErrorResponse(`Product with ID ${id} not exists`,404))
    }
  } catch (error) {
    next(error);
  }
};
deleteCourse = async (req, res, next) => {
  const id = req.params.id;
  try {
    const existsRecord = await courseRepository.checkRecordExists(id);
    if (existsRecord) {
      const deleted = courseRepository.deleteCourse(id);
      if (deleted) {
        res
          .status(200)
          .json({
            success: true,
            data: { message: `Deleted Course with ID: ${id} ` },
          });
      }
    } else
    next(new ErrorResponse(`Product with ID ${id} not exists`,404))
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
