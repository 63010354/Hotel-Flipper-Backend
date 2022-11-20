import { ForbiddenException } from "@nestjs/common";
import { AbstractHotel } from "./AbstractHotel";

export class NullHotel extends AbstractHotel{

    constructor(){
        super()
    }

    public isNull() : boolean{
        throw new ForbiddenException('Credentials incorrect');
    }

    public async verify(pass): Promise<Boolean> {
        return false
    }
    
    
}