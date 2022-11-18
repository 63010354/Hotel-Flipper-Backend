import { IsNotEmpty, IsEmail } from "class-validator";

export class HotelSignupDTO {
    h_id: string;
    password: string;
    h_name: string;
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