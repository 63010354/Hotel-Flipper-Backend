import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDTO } from './dto';
import * as argon2 from "argon2";
import { Prisma } from '@prisma/client';


@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) { }

    async signup(dto: EmployeeDTO) {
        //gen password

        //save new user
        const employee:Prisma.EmployeeUpdateInput = await this.prisma.employee.create({
            data: {
                f_name: dto.f_name,
                l_name: dto.l_name,
                tel: dto.tel,
                email: dto.email,
                birth: dto.birth,
                address: dto.address,
                alley: dto.alley,
                street: dto.street,
                district: dto.district,
                subdistrict: dto.subdistrict,
                province: dto.province,
                postcode: dto.postcode,
            },
        })

        //return save user
        return employee;
    }
}
