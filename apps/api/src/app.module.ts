import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  AppConfigModule,
  configuration,
  envSchema,
} from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate: (config) => envSchema.parse(config),
    }),

    AppConfigModule,
  ],
})
export class AppModule {}