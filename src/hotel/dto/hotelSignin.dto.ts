import { IsNotEmpty, IsEmail } from "class-validator";

export class HotelSigninDTO {
    h_id: string;
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    hash: string;
}