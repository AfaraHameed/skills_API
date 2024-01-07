const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/orm')
const Course = sequelize.define("training_courses", {
    id:{type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     unique:true,
     fields:"id"
 } ,
   title: DataTypes.STRING,
   duration: DataTypes.INTEGER,
   noOfSkills:DataTypes.INTEGER
 });

 module.exports = {
    Course
 }