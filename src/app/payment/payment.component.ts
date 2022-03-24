import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  id: number;
  cardForm:FormGroup;
  upiForm:FormGroup;
  walletForm:FormGroup;
  
    constructor(private fb: FormBuilder) { }
    
    ngOnInit(): void {
      this.cardForm = this.fb.group({
        cardHolderName:['', Validators.required],
        cardNumber:['', Validators.required],
        cvv:['', Validators.required],
        validTill:['', Validators.required],
      });
      this.upiForm = this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        phoneNo:['', Validators.required],
        upi:['', Validators.required],
      });
      this.walletForm = this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        phoneNo:['', Validators.required],
        wallet:['', Validators.required],
      });
    }
  
  
  show(id) {  
    for (var i=1;i<=3;i++)
    {
        document.getElementById('show'+i).style.display = 'none';
    }
    document.getElementById('show'+id).style.display = 'block';
}
}
