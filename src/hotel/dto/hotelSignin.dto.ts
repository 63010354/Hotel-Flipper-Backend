import { IsNotEmpty, IsEmail, IsString } from "class-validator";

export class HotelSigninDTO {
    h_id: string;

    @IsNotEmpty() 
    @IsString()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    hash: string;
}