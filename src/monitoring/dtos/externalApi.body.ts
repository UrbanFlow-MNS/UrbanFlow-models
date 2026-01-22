import {ApiProperty} from "@nestjs/swagger";

export class ExternalApiBody {
    @ApiProperty()
    name: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    isActive: boolean;
    @ApiProperty()
    version: string;

    constructor(name:string, url: string, isActive: boolean, version: string) {
        this.name = name;
        this.url = url;
        this.isActive = isActive;
        this.version = version;
    }
}