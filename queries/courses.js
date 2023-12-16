const getAllProducts = "SELECT id,title,duration FROM courses";
const getSingleCourse = "SELECT id,title,duration FROM courses where id=$1"
const createCourse = "INSERT INTO courses (duration,title) VALUES ($1,$2)"
const updateCourse = "UPDATE courses set duration=$1 ,title=$2 WHERE id=$3"
const deleteCourse = "DELETE FROM courses WHERE id=$1"

module.exports = {
    getAllProducts,
    getSingleCourse,
    createCourse,
    updateCourse,
    deleteCourse
}