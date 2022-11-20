import { PrismaService } from "src/prisma/prisma.service"
import { AbstractHotel } from "./AbstractHotel"
import * as argon2 from "argon2";

export class ConcreateHotel extends AbstractHotel{
    constructor(hotel){
        super()
        this.hotel = hotel
    }

    public isNull(): boolean {
        return false
    }
    public getEmail(): string {
        return this.hotel
    }
    public async verify(pass): Promise<Boolean> {
        //console.log(argon2.verify(this.hotel.hash, pass)) 
        //console.log(this.hotel.hash)
        return await argon2.verify(this.hotel.hash, pass)
        //return true
    }
}