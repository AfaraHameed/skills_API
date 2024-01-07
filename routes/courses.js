const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

const {verifyTokenHandler,verifyRole} = require('../middlewares/jwtHandler')

// router.get("/",[verifyTokenHandler,verifyRole('admin')], getAllCourses);
router.get("/", getAllCourses);

router.post("/", createCourse);

router
  .route("/:id")
  .get(getSingleCourses)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
