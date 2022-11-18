import { Body, Controller,  Post } from "@nestjs/common";
import { EmployeeService } from './employee.service';
import { EmployeeDTO } from "./dto";

@Controller('employee')
export class EmployeeController {
    constructor (private employeeService: EmployeeService){}

    @Post('signup')
    signup(@Body() dto: EmployeeDTO){
        return this.employeeService.signup(dto);
    }
}
