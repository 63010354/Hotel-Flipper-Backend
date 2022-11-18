import { Body, Controller, Post, Put, Get } from "@nestjs/common";
import { HotelSignupDTO } from "./dto";
import { HotelSigninDTO } from "./dto";
import { HotelService } from "./hotel.service";


@Controller('hotel')
export class HotelController {
    constructor(private hotelService: HotelService) { }

    @Post('signup')
    signup(@Body() dto: HotelSignupDTO) {
        return this.hotelService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: HotelSigninDTO) {
        return this.hotelService.signin(dto);
    }

    @Put()
    async updateServiceType(@Body() body: HotelSignupDTO) {
        return this.hotelService.updateHotel(body.h_name, body);
    }

    @Get()
    async getService(@Body() hotel: HotelSignupDTO) {
        return this.hotelService.findByType(hotel.h_name);
    }

}