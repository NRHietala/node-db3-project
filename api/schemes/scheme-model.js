const db = require("../../data/db-config.js");

const find = () => {
  return db("schemes");
};

const findById = id => {
  return db("schemes").where("id", id).first();
};

const findSteps = () => {};

const add = schemeData => {
  return db("schemes")
    .insert(schemeData)
    .then(() => db("schemes"));
};

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
