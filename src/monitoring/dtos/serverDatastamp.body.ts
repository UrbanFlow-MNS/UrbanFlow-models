import {ApiProperty} from "@nestjs/swagger";

export class ServerDatastampBody {
    @ApiProperty()
    serverName: string;
    @ApiProperty()
    timestamp: string;
    @ApiProperty()
    cpuPercent: number;
    @ApiProperty()
    gpuPercent: number;
    @ApiProperty()
    ramUsage:number
    @ApiProperty()
    internalTemp:number;

    constructor(serverName:string, timestamp:string, cpuPercent:number, gpuPercent:number, ramUsage:number, internalTemp:number) {
        this.serverName = serverName;
        this.timestamp = timestamp;
        this.cpuPercent = cpuPercent;
        this.gpuPercent = gpuPercent;
        this.ramUsage = ramUsage;
        this.internalTemp = internalTemp;
    }
}