const Sequelize = require("sequelize");
const dbconfig = {
  user: "training_user",
  password: "upcode",
  host: "localhost",
  port: 5433,
  database: "training_db",
};

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.user,
  dbconfig.password,
  {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  }
);

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync()
      .then((data) => {
        console.log("model synced", data);
      })
      .catch((err) => {
        console.log("Error syncing the database!");
      });
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

module.exports = sequelize;
