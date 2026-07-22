import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  PORT: z.coerce.number().int().positive(),

  DATABASE_URL: z.string().url(),

  JWT_SECRET: z.string().min(32),

  JWT_REFRESH_SECRET: z.string().min(32),

  REDIS_HOST: z.string(),

  REDIS_PORT: z.coerce.number().int().positive(),
});

export type Env = z.infer<typeof envSchema>;