import { conn, Model } from '../database';

export class User extends Model {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'users';
}

export default User.bindKnex(conn);
