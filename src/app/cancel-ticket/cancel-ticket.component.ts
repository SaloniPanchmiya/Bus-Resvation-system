import { CancelTicket } from './CancelTicket';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {
  cancelTicketForm:FormGroup;
  cancelTickets:CancelTicket[];


  constructor(private fb: FormBuilder) {
    this.cancelTickets=new Array();
   }

  ngOnInit(): void {
    this.cancelTicketForm = this.fb.group({
      emailId: ['', Validators.required],
      ticketNo:['', Validators.required],
    });
  }
cancelTicket()
{
  
}
}
