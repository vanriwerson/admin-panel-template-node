export default () => ({
  app: {
    port: Number(process.env.PORT),
    nodeEnv: process.env.NODE_ENV!,
  },

  database: {
    url: process.env.DATABASE_URL!,
  },

  jwt: {
    secret: process.env.JWT_SECRET!,
    refreshSecret: process.env.JWT_REFRESH_SECRET!,
  },

  redis: {
    host: process.env.REDIS_HOST!,
    port: Number(process.env.REDIS_PORT),
  },
});