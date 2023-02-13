const env: any = process.env; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface DBConfig {
  DATABASE_URL: string;
}

const dbConfig: DBConfig = {
  DATABASE_URL: env.DATABASE_URL
};

export default dbConfig;
