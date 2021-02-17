const db = require("../../data/db-config.js");

const find = () => {
  return db("schemes");
};

const findById = id => {
  return db("schemes").where("id", id).first();
};

const findSteps = id => {};

const add = schemeData => {
  return db("schemes")
    .insert(schemeData)
    .then(([id]) => db("schemes").where("id", id).first());
};

const update = (changes, id) => {
  return db("schemes")
    .where("id", id)
    .update(changes)
    .then(() => {
      return db("schemes").where("id", id).first();
    });
};

const remove = id => {
  return db("schemes").where("id", id).del();
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};
