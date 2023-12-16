const getAllProducts = "SELECT id,title,duration FROM courses";
const getSingleCourse = "SELECT id,title,duration FROM courses where id=$1"
module.exports = {
    getAllProducts,
    getSingleCourse
}