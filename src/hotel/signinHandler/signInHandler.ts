import { PrismaService } from "src/prisma/prisma.service";
import { AbstractHotel } from "./AbstractHotel";
import { ConcreateHotel } from "./ConcreateHotel";
import { NullHotel } from "./nullHotel";

export class SignInHandler{
    
    constructor(private prisma: PrismaService){
        
    }
    public async check(email):Promise<AbstractHotel>{
        const Hotel =  await this.prisma.hotel.findFirst({
            where: {
                email: email,
            }
        })
        if (Hotel){
            return new ConcreateHotel(Hotel)
        }
        return new NullHotel()
    }
}