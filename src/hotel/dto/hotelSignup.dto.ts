import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class HotelSignupDTO {
    h_id: string;

    @IsString()
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    h_name: string;
    @IsNotEmpty()
    tel: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;

    address: string;
    alley: string;
    street: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
    hash: string;
}