/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//starting with recipes ad ingredients because they do not hae a foreign key.
exports.up = async function(knex) {
    await knex.schema
      .createTable("recipes", table => {
        table.increments('recipe_id')
        table.string('recipe_name', 200).notNullable().unique()
      })
      .createTable("ingredients", table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 200).notNullable().unique()
        table.string('ingredients_unit', 50)
      })
      .createTable("steps", table => {
        table.increments();
      })
      .createTable("step_ingredients", table => {
        table.increments();
      });
  
};
// the order needs to be reversed to go down
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
