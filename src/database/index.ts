import knex from 'knex';
import { Model } from 'objection';
import config from '../config';

export const conn = knex({
  client: 'pg',
  connection: config.db.DATABASE_URL
});

/**
 * Uncomment below code if you want to use mysql and uninstall pg module,
 * It is recommended to add your db config to config/db.ts
 */
// const conn = knex({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       port : 3306,
//       user : 'your_database_user',
//       password : 'your_database_password',
//       database : 'myapp_test'
//     }
//   });

Model.knex(conn);

export { Model };
