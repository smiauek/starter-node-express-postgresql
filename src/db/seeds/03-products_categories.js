const productsCategories = require("../fixtures/productsCategories");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("products_categories").insert(productsCategories);
    });
};
