const db = require("../../data/db-config.js");

const find = () => {
  return db("schemes");
};

const findById = id => {
  return db("schemes").where("id", id).first();
};

const findSteps = () => {};

const add = () => {};

const addSteps = () => {};

const remove = () => {};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addSteps,
  remove,
};
