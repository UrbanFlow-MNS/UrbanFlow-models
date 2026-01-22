export class LogBody {
    microserviceName: string
    codeOfEvent: string
    event: string
    createdAt: Date;

    constructor(microserviceName: string, codeOfEvent: string, event: string) {
        this.microserviceName = microserviceName
        this.codeOfEvent = codeOfEvent
        this.event = event
        this.createdAt = new Date();

    }

}