const db = require("../../db/db.config");
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const Op = Sequelize.Op;
const Users = db.users;
const moment = require("moment");

function findAll() {
  return Users.findAll({
    attributes: ["id", "firstName", "lastName", "email"],
    raw: true,
  });
}

function create({ firstName, lastName, email }) {
  return Users.create({
    firstName,
    lastName,
    email,
    createdAt: moment().utc(),
    updatedAt: moment().utc(),
  });
}

module.exports = {
  findAll,
  create,
};
