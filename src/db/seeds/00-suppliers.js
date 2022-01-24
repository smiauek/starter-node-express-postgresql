const suppliers = require("../fixtures/suppliers");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("suppliers").insert(suppliers);
    });
};
