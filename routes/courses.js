const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

router.get("/", getAllCourses);
router.post("/", createCourse);

router
  .route("/:id")
  .get(getSingleCourses)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
