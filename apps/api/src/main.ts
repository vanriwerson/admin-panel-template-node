import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  AppConfigService,
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
  ],

  providers: [AppConfigService],

  exports: [AppConfigService],
})
export class AppModule {}