import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HotelSignupDTO } from "./dto";
import { HotelSigninDTO } from "./dto";
import * as argon2 from "argon2";
import { HttpService } from '@nestjs/axios';
import { SignInHandler } from "./signinHandler/signInHandler";
import { Prisma } from "@prisma/client";



@Injectable()
export class HotelService {
    constructor(private prisma: PrismaService, private readonly httpService: HttpService) { }

    async signup(dto: HotelSignupDTO) {

        // const { data } = await firstValueFrom(
        //     this.httpService.post(
        //         "http://localhost:8093/RequestCredit",
        //         {
        //             "Enterpreneur_Email": dto.email,
        //             "Enterpreneur_Name": dto.h_name
        //         }
        //     )
        // )
        // if (data.creditCalculation.recommend === "Bad Credit") {
        //     return "Your credit isn't reliable."
        // }
        //gen password
        const hash = await argon2.hash(dto.password);

        //find email
        const email = await this.prisma.hotel.findFirst({
            where: {
                email: dto.email
            }
        })
        //save new user
        if(!email){
            const hotel = await this.prisma.hotel.create({
                data: {
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
            return 'Signup success';
        }

        return 'Your email already exist';
    }

    async signin(dto: HotelSigninDTO) {
        //find hotel
        const hotel = await this.prisma.hotel.findFirst({
            // select: {
            //     email: true,
            //     hash:true
            // }
            where: {
                email: dto.email,
                //hash:true
            }
        })
        console.log(hotel)
        let auth = (await new SignInHandler(this.prisma)
                        .check(dto.email))
        const result = auth.isNull()
        //cant find
        //throw new ForbiddenException((await outcome).isNull());
        
        //compare password
        // const pwMatches = await argon2.verify(hotel.hash, dto.password)

        //incorrect
        if (!await auth.verify(dto.password))
            throw new ForbiddenException('Credentials incorrect ');
        return {
            hotel,
            statuscode:200
        }
    }

    async updateHotel(hotelID: string, data: any) {
        const updateHotel = await this.prisma.hotel.update({
            where: { h_id: hotelID },
            data: data,
        });
        return;
    }

    async findByType(hotel: string) {
        const data = await this.prisma.hotel.findFirst({
            where: { h_id: hotel },
        });
        return data;
    }

    
}