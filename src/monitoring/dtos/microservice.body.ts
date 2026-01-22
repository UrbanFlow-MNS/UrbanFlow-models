import {ApiProperty} from "@nestjs/swagger";

export class MicroserviceBody {

    @ApiProperty()
    name: string;
    @ApiProperty()
    isActive:boolean;
    @ApiProperty()
    filePath:string;

    constructor(name: string, isActive:boolean, filePath:string) {
        this.name = name;
        this.isActive = isActive;
        this.filePath = filePath;
    }
}