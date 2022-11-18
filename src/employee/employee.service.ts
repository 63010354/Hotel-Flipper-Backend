import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDTO } from './dto';
import * as argon2 from "argon2";


@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) { }

    async signup(dto: EmployeeDTO) {
        //gen password
        const hash = await argon2.hash(dto.password);

        //save new user
        const employee = await this.prisma.employee.create({
            data: {
                password: dto.password,
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
                hash: hash
            },
        })

        //return save user
        return employee;
    }
}
