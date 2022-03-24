import { ForgotPassword } from './ForgotPassword';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPassForm:FormGroup;
  forgotPwd: ForgotPassword[];

  constructor(private fb: FormBuilder) {
    this.forgotPwd=new Array();
   }

  ngOnInit(): void {
    this.forgotPassForm = this.fb.group({
      emailId: ['', Validators.required],
    });
  }
forgotPass()
{ 

  
    
}

}
