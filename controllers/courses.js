const productRepository = require("../repositories/repositories");
//@desc to get all courses
//@route '/api/v1/courses
//access public
getAllCourses = (req, res, next) => {
  productRepository.getAllProducts().then(
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
  pool.query(courseQueries.getSingleCourse, [id], (error, result) => {
    if (error) throw error;
    if (result.rows.length) res.status(200).json(result.rows);
    else
      res.status(404).json({ message: `product does not exist with id ${id}` });
  });
};
createCourse = (req, res, next) => {
  const { duration, title } = req.body;
  pool.query(courseQueries.createCourse, [duration, title], (error, result) => {
    if (error) throw error;
    res.status(201).json({ message: "created new course successfully" });
  });
};

updateCourse = (req, res, next) => {
  const { duration, title } = req.body;
  const id = req.params.id;
  pool.query(courseQueries.getSingleCourse, [id], (error, result) => {
    if (error) throw error;
    //const recordExists = result.rows.length > 0;
    if (result.rows.length) {
      pool.query(
        courseQueries.updateCourse,
        [duration, title, id],
        (error, result) => {
          if (error) throw error;
          res
            .status(200)
            .json({ message: `updated product with id ${id} successfully` });
        }
      );
    } else res.status(404).json({ message: `no product exists with id ${id}` });
  });
};
deleteCourse = (req, res, next) => {
  const id = req.params.id;
  pool.query(courseQueries.getSingleCourse, [id], (error, result) => {
    if (error) throw error;
    //const recordExists = result.rows.length > 0;
    if (result.rows.length) {
      pool.query(courseQueries.deleteCourse, [id], (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .json({ message: `deleted product with id ${id} successfully` });
      });
    } else
      res.status(404).json({ message: `record does not exists with id ${id}` });
  });
};
module.exports = {
  getAllCourses,
  getSingleCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
