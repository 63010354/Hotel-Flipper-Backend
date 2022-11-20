export abstract class AbstractHotel{
    protected hotel

    abstract isNull():boolean
    abstract verify(pass:string):Promise<Boolean>
}