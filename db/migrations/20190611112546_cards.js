
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cards",(table)=>{
    table.increments(); // Creates id column
    table.integer("mana"); // Creates name column as varchar(255)
    table.integer("attack"); // Creates email column as varchar(255)
    table.integer("health");
    table.string("description"); // Creates password column as varchar(255)
    table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cards");
};
