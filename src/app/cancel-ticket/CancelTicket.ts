export class CancelTicket{

    emailId:string;
    ticketNo:number;

    constructor(emailId:string,ticketNo:number)
    {
        this.emailId=emailId;
        this.ticketNo=ticketNo;
    }

}