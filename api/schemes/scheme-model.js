const db = require("../../data/db-config.js");

const find = () => {
  return db("schemes");
};

const findById = () => {};

const findSteps = () => {};

const add = () => {};

const remove = () => {};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  remove,
};
