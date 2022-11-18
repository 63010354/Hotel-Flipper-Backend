import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HotelModule, EmployeeModule, PrismaModule],
})
export class AppModule {}
