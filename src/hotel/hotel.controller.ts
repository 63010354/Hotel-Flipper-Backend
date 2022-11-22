import { Body, Controller, Post, Put, Get, Param } from "@nestjs/common";
import { HotelSigninDTO, HotelSignupDTO, HotelUpdateDTO } from "./dto";
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

    @Put('update')
    async updateServiceType(@Body() dto: HotelUpdateDTO) {
        return this.hotelService.updateHotel(dto);
    }

    @Get(':id')
    async getService(@Param("id") h_id: string) {
        return this.hotelService.findByType(h_id);
    }

}