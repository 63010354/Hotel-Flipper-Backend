import { IsNumber, IsNotEmpty, IsEmail, IsString } from "class-validator";

export class EmployeeDTO {
    password: string;
    f_name: string;
    l_name: string;
    tel: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    birth: string;

    address: string;
    alley: string;
    street: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
    hash: string;

}