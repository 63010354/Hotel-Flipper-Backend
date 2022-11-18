import { IsNumber,IsNotEmpty,IsEmail } from "class-validator";

export class EmployeeDTO {
    password: string;
    f_name: string;
    l_name: string;
    tel: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    birth: Date;
    address: string;
    alley: string;
    street: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
    hash: string;
}