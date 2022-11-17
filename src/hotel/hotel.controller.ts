import { Body, Controller,  Post } from "@nestjs/common";
import { HotelDTO } from "src/hotel/dto";
import { HotelService } from "./hotel.service";


@Controller('hotel')
export class HotelController{
    constructor (private hotelService: HotelService){}

    @Post('signup')
    signup(@Body() dto: HotelDTO){
        return this.hotelService.signup(dto);
    }
    
    @Post('signin')
    signin(@Body() dto: HotelDTO){
        return this.hotelService.signin(dto);
    }
}