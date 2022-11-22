import { IsNotEmpty, IsEmail, IsString, isNotEmpty } from "class-validator";

export class HotelUpdateDTO {
    h_id: string;
    h_name: string;
    tel: string;
    address: string;
    alley: string;
    street: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
}