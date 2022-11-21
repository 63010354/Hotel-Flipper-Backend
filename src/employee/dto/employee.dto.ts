import { IsNumber, IsNotEmpty, IsEmail, IsString } from "class-validator";

export class EmployeeDTO {
    @IsNotEmpty()
    f_name: string;
    @IsNotEmpty()
    l_name: string;
    @IsNotEmpty()
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


}