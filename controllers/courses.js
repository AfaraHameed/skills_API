const courseRepository = require("../repositories/course");
//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = (req, res, next) => {
  courseRepository.getAllCourses().then(
    (data) => {
      res.status(200).json(data);
    },
    (error) => {
      res.status(500).json({ message: error.message });
    }
  );
};
//@desc to course by id
//@route '/api/v1/courses/:id
//access public
getSingleCourses = (req, res, next) => {
  const id = req.params.id;
  courseRepository.getCourseBiId(id).then(
    (data) => {
      res.status(200).json(data);
    },
    (error) => {
      res.status(500).json(error.message);
    }
  );
};
createCourse = (req, res, next) => {
  const { duration, title } = req.body;
  courseRepository.addNewProduct(duration, title).then(
    (data) => {
      res.status(200).json({ message: "product added successfully" });
    },
    (error) => {
      res.status(500).json(error.message);
    }
  );
};

updateCourse = async (req, res, next) => {
  const { duration, title } = req.body;
  const id = req.params.id;
  const existsRecord = await courseRepository.checkRecordExists(id);
  if (existsRecord) {
    courseRepository.updateCourse(duration, title, id).then(
      (data) => {
        res.status(200).json(`product with id ${id} updated successfully`);
      },
      (error) => {
        res.status(500).json(error.message)
      }
    );
  }
  else{
    res.status(404).json(`product with id ${id} not exists`)
  }
};
deleteCourse = async (req, res, next) => {
  const id = req.params.id;
  const existsRecord = await courseRepository.checkRecordExists(id);
  if (existsRecord) {
    courseRepository.deleteCourse(id).then((data)=>{
      res.status(200).json(data)
    },(error)=>{
      res.status(500).json(error.message)
    })
  }
     else
      res.status(404).json({ message: `record does not exists with id ${id}` });
};
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
