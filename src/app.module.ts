import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HotelModule, EmployeeModule, AuthModule, PrismaModule],
})
export class AppModule {}
