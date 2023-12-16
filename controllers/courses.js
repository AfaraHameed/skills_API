//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: { id: 1, messgae: "get courses" } });
};
//@desc to course by id
//@route '/api/v1/courses/:id
//access public
getSingleCourses = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: { id: 1, messgae: `get courses by id ${req.params.id}` },
    });
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
