import {ApiProperty} from "@nestjs/swagger";

export class LogBody {
    @ApiProperty()
    microserviceName: string
    @ApiProperty()
    codeOfEvent: string
    @ApiProperty()
    event: string
    createdAt: Date;

    constructor(microserviceName: string, codeOfEvent: string, event: string) {
        this.microserviceName = microserviceName
        this.codeOfEvent = codeOfEvent
        this.event = event
        this.createdAt = new Date();

    }

}