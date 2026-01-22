import {ApiProperty} from "@nestjs/swagger";

export class DataLogsDto {

    @ApiProperty()
    isApi : boolean;
    @ApiProperty()
    targetId: number;
    dateOfData: Date;
    @ApiProperty()
    numberOfConnection: number;
    @ApiProperty()
    event: string;

    constructor(isApi : boolean, targetId : number, numberOfConnection : number, event : string) {
        this.isApi = isApi;
        this.targetId = targetId;
        this.dateOfData = new Date();
        this.numberOfConnection = numberOfConnection;
        this.event = event;
    }
}