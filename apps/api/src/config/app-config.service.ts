import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Env } from './env';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  get port(): number {
    return this.configService.getOrThrow<number>(Env.APP_PORT);
  }

  get nodeEnv(): string {
    return this.configService.getOrThrow<string>(Env.APP_ENV);
  }

  get databaseUrl(): string {
    return this.configService.getOrThrow<string>(Env.DATABASE_URL);
  }

  get jwtSecret(): string {
    return this.configService.getOrThrow<string>(Env.JWT_SECRET);
  }

  get jwtRefreshSecret(): string {
    return this.configService.getOrThrow<string>(Env.JWT_REFRESH_SECRET);
  }

  get redisHost(): string {
    return this.configService.getOrThrow<string>(Env.REDIS_HOST);
  }

  get redisPort(): number {
    return this.configService.getOrThrow<number>(Env.REDIS_PORT);
  }
}