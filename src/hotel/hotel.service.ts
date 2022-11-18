import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HotelDTO } from "./dto";
import * as argon2 from "argon2";


@Injectable()
export class HotelService{
    constructor(private prisma: PrismaService){}

    async signup(dto:HotelDTO){
        //gen password
        const hash = await argon2.hash(dto.password);

        //save new user
        const hotel = await this.prisma.hotel.create({
            data:{
                password: dto.password,
                h_name: dto.h_name,
                tel: dto.tel,
                email: dto.email,
                address: dto.address,
                alley: dto.alley,
                street: dto.street,
                district: dto.district,
                subdistrict: dto.subdistrict,
                province: dto.province,
                postcode: dto.postcode,
                hash: hash
            },
        })

        //return save user
        return hotel;
    }

    async signin(dto:HotelDTO) {
        //find hotel
        const hotel = await this.prisma.hotel.findFirst({
            where: {
                email: dto.email
            }
        })

        //cant find
        if(!hotel) throw new ForbiddenException('Credentials incorrect');

        //compare password
        const pwMatches = await argon2.verify(hotel.hash,dto.password)

        //incorrect
        if(!pwMatches) throw new ForbiddenException('Credentials incorrect');

        return hotel;
    }

    async updateHotel(hotelName: string, data: any) {
        const updateHotel = await this.prisma.hotel.update({
          where: { h_name:hotelName},
          data: data,
        });
        return;
      }

    async findByType(hotel: string) {
        const data = await this.prisma.hotel.findFirst({
          where: { h_name: hotel },
        });
        return data;
      }
}