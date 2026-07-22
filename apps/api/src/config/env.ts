import configuration from './configuration';

export const Env = {
  APP_PORT: 'app.port',
  APP_ENV: 'app.nodeEnv',

  DATABASE_URL: 'database.url',

  JWT_SECRET: 'jwt.secret',
  JWT_REFRESH_SECRET: 'jwt.refreshSecret',

  REDIS_HOST: 'redis.host',
  REDIS_PORT: 'redis.port',
} as const;

export type Environment = ReturnType<typeof configuration>;
