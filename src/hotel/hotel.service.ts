import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HotelDTO } from "./dto";
import * as argon from 'argon2'

@Injectable()
export class HotelService{
    constructor(private prisma: PrismaService){}

    async signup(dto:HotelDTO){
        //gen password
        const hash = await argon.hash(dto.password);
        //save new user
        const hotel  = await this.prisma.hotel.create({
            data: {
                username: dto.username,
                hash,
            },
        })
        delete hotel.hash
        //return save user
        return hotel;
    }

    async signin(dto:HotelDTO){
        //find hotel
        const hotel = await this.prisma.hotel.findUnique({
            where: {
                username: dto.username,
            },

        })
        //cant find
        if(!hotel) throw new ForbiddenException('Credentials incorrect');
        //compare password
        const pwMatches = await argon.verify(hotel.hash,dto.password)
        //incorrect
        if(!pwMatches) throw new ForbiddenException('Credentials incorrect');
        delete hotel.hash;
        return hotel;
    }
}