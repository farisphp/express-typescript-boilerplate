import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.string('id', 64).notNullable().primary().index();
    table.string('email');
    table.string('name');
    table.text('password');
    table.timestamps(true, true);

    table.unique(['email']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
