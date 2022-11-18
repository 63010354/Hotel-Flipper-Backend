import { Body, Controller,  Post ,Put,Get} from "@nestjs/common";
import { HotelDTO } from "./dto";
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

    @Put()
    async updateServiceType(@Body() body: HotelDTO) {
    return this.hotelService.updateHotel(body.h_name, body);
    }

    @Get()
    async getService(@Body() hotel: HotelDTO) {
    return this.hotelService.findByType(hotel.h_name);
    }
    
  }