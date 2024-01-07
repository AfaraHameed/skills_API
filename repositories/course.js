const courseQueries = require("../queries/courses");
const pool = require("../config/db");
const {Course} = require('../models/course')
// Get all courses
getAllCourses = () => {
  return new Promise((resolve, reject) => {

    Course.findAll().then((course)=>{
      resolve(course)
    }).then((err)=>{
      reject(err)
    })

   /* pool.query(courseQueries.getAllProducts, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });*/
  });
};
getCourseBiId = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(courseQueries.getSingleCourse, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};
checkRecordExists = (id)=>{
  return new Promise((resolve,reject)=>{
    pool.query(courseQueries.getSingleCourse, [id], (error, result) => {
      if (error) {
        reject(false);
      } else{
        resolve(result.rows.length>0);
      }
    });
  })
}
addNewProduct = (duration,title,noOfSkills)=>{
  return new Promise((resolve,reject)=>{

    Course.create({
      title,duration,noOfSkills
    }).then(()=>{
      resolve(true)
    }).catch((err)=>{
      reject(err)
    })

  //   pool.query(courseQueries.createCourse, [duration, title], (error, result) => {
  //     if(error){
  //       reject(error)
  //     }
  //     else{
  //       resolve(true)
  //     }
  // })

})
}

updateCourse = (duration,title,id)=>{
  return new Promise((resolve,reject)=>{
    pool.query(
      courseQueries.updateCourse,
      [duration, title, id],
      (error, result) => {
        if (error) {
          reject(error)
        }
        else{
          resolve(true)
        }
  
  })
})}
deleteCourse = (id)=>{
  return new Promise((resolve,reject)=>{
    pool.query(courseQueries.deleteCourse, [id], (error, result) => {
      if (error) {
        reject(error)
      }
     else{
      resolve(true) 
     }
  })
})}
 

module.exports = {
  getAllCourses,
  getCourseBiId,
  addNewProduct,
  updateCourse,
  checkRecordExists,
  deleteCourse
};
