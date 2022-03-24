import { Component, OnInit } from '@angular/core';
import { Bus } from '../admin/Bus';
import { BusService } from '../bus.service';
import { RegisterService } from '../register.service';
import { Register } from '../register/Register';
import { SearchBusComponent } from '../search-bus/search-bus.component';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit {

  search=new SearchBusComponent(null);
  users:Register[];
  email:string;
  user:Register;
  busId:number;
  bus:Bus[];
  buss:Bus;
 
 
  constructor(private service:RegisterService,private service2:BusService) { }
  ngOnInit(): void {
    this.service.getRegistration().subscribe(data=>{
      this.users = data;
    });
    this.service2.getbus().subscribe(data=>{
      this.bus=data;
    })
    this.email = localStorage.getItem("username");
    //this.busid=localStorage.getItem("busid")
  }
  showRecsipt()
  {
    for(let u1 of this.users){
      if(this.email== u1.emailId){
        //this.uName=u1.firstName+' '+ u1.lastName;
        this.user=u1;
      }
    }
    for(let b1 of this.bus)
    {
      if(this.busId==b1.id)
      {
        this.buss=b1;
      }
    }
  }
  printPage() {
    window.print();
  }

  

}
