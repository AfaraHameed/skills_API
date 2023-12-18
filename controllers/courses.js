const ErrorResponse = require("../utils/errorResponse");
const courseRepository = require("../repositories/course");
const asyncHandler = require("../middlewares/asyncHandler");
//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = asyncHandler(async (req, res, next) => {
  const courses = await courseRepository.getAllCourses();
  res.status(200).json({ success: true, data: courses });
});

//@desc to course by id
//@route '/api/v1/courses/:id
//access public
getSingleCourses = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const existsRecord = await courseRepository.checkRecordExists(id);
  const course = await courseRepository.getCourseBiId(id);
  //console.log(course,course.length)
  if (course.length > 0) {
    res.status(200).json({ success: true, data: course });
  } else {
    return next(new ErrorResponse(`No course found with the id ${id}`, 404));
  }
});

createCourse = asyncHandler(async (req, res, next) => {
  const { duration, title } = req.body;
  const created = await courseRepository.addNewProduct(duration, title);
  if (created) {
    res.status(201).json({
      success: true,
      data: { message: "created course successfully" },
    });
  } else {
    next(new ErrorResponse(`product with id ${id} not exists`, 404));
  }
});

updateCourse = asyncHandler(async (req, res, next) => {
  const { duration, title } = req.body;
  const id = req.params.id;
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
    next(new ErrorResponse(`Product with ID ${id} not exists`, 404));
  }
});

deleteCourse = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const existsRecord = await courseRepository.checkRecordExists(id);
  if (existsRecord) {
    const deleted = courseRepository.deleteCourse(id);
    if (deleted) {
      res.status(200).json({
        success: true,
        data: { message: `Deleted Course with ID: ${id} ` },
      });
    }
  } else next(new ErrorResponse(`Product with ID ${id} not exists`, 404));
});
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
