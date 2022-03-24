import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Passenger } from './Passenger';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css']
})
export class UnauthorisedComponent implements OnInit {
  passengerForm: FormGroup;
  passengers: Passenger[];
  constructor(private fb: FormBuilder, private router:Router) {
    this.passengers=new Array();
   }
   
  ngOnInit(): void {
    this.passengerForm = this.fb.group({
      emailId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo:['', Validators.required],
    });
    // alert(sessionStorage.getItem('source'));
    // alert(sessionStorage.getItem('dest'));
    // alert(sessionStorage.getItem('date'));
}
  
addPassenger(): void {
  let passenger:Passenger = new Passenger(this.passengerForm.controls.emailId.value, 
    this.passengerForm.controls.firstName.value, 
    this.passengerForm.controls.lastName.value,this.passengerForm.controls.phoneNo.value)
    this.router.navigate(['search-bus-page']);
}
}
