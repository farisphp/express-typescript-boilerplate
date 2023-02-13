import app, { AppConfig } from './app';
import db, { DBConfig } from './db';

export interface Config {
  app: AppConfig;
  db: DBConfig;
}

const config: Config = {
  app,
  db
};

export default config;
