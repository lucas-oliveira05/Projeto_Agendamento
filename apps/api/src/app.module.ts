import { Module } from '@nestjs/common';
import { HealthController } from './modules/core/health.controller';
import { AuthModule } from './modules/core/auth.module';
import { TenancyModule } from './modules/core/tenancy.module';

@Module({
  imports: [AuthModule, TenancyModule],
  controllers: [HealthController],
})
export class AppModule {}
