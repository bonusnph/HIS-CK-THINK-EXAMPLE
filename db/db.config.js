const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const db = {
    Sequelize,
    sequelize
};

//import model
db.users = require("./models/users.js")(sequelize, Sequelize);

module.exports = db;
