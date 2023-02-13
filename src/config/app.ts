// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const env: any = process.env;

export interface AppConfig {
  NODE_ENV: string;
  PORT: number;
}

const appConfig: AppConfig = {
  NODE_ENV: env.NODE_ENV || 'development',
  PORT: Number(env.PORT) || 8000
};

export default appConfig;
