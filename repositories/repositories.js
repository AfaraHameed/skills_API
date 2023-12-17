const courseQueries = require("../queries/courses");
const pool = require("../config/db");
// Get all courses
getAllProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(courseQueries.getAllProducts, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

module.exports = {
    getAllProducts
}
