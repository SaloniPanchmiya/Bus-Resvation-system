import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register/Register';
import { UserloginService } from '../userlogin.service';
import { UserLogin } from '../login/UserLogin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  passForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  cancelForm: FormGroup;
  submittedCancel: boolean = false;
  invalidCancel: boolean = false;
  users:Register[];
  user:Register;
  users1: UserLogin[];
  constructor(private formBuilder: FormBuilder, private router: Router, private service:RegisterService,private userService: UserloginService ) {
    this.users=new Array();
   }

  
  onSubmitCancel(){
    this.submittedCancel = true;
    if(this.cancelForm.invalid){
      return;
    }
    if(this.cancelForm.controls.email.value =="nag@gmail.com"){
          this.submittedCancel = false;
          this.cancelForm.controls.email.setValue("");
          this.cancelForm.controls.ticketNo.setValue("");
          this.router.navigate(['after-cancel']);
    }
    else{
      this.invalidCancel = true;
    }
  }

  email:string;
  
  newReg:boolean = true;
  uName:string;

  id:number;
  ngOnInit(): void {
    if(localStorage.getItem("username")!=null){
    this.passForm = this.formBuilder.group({
      ps1: ['', Validators.required],
      ps2: ['', Validators.required]
    });
    this.cancelForm = this.formBuilder.group({
      email: ['', Validators.required],
      ticketNo: ['', Validators.required]
    });

    this.service.getRegistration().subscribe(data=>{
      this.users = data;
    });

    this.userService.getUsers()
      .subscribe(data => {
        this.users1 = data;
      });

  
    this.email = localStorage.getItem("username");

    
    /*for (let index = 0; index < this.users.length; index++) {
      alert(this.users[index].emailId)
      if(this.email==this.users[index].emailId){
        this.uName=this.users[index].firstName+' '+ this.users[index].lastName;
      }
    }
    /*
    }*/
    this.uName=localStorage.getItem("uname");
    
  }else{
  this.router.navigate(['/login-page']);
    
  }
}

  show(id) {  
    for (var i=1;i<=6;i++)
    {
        document.getElementById('choice'+i).style.display = 'none';
        document.getElementById('choice'+i).style.paddingTop = '70px';
    }
    document.getElementById('choice'+id).style.display = 'block';
    //alert(JSON.stringify(this.users));
    for(let u1 of this.users){
      if(this.email== u1.emailId){
        //this.uName=u1.firstName+' '+ u1.lastName;
        this.user=u1;
      }
    }
    //alert(this.uName)
}
showName(){
  
}
Logout():void{
  if(localStorage.getItem("username")!=null){
    localStorage.removeItem("username");
    this.router.navigate(['login-page']);
  }
} 
serchBusForUser()
{
  if(localStorage.getItem("username")!=null){
    localStorage.removeItem("username");
    this.router.navigate(['login-page']);
  
  }
}


onSubmitPass(){
  this.submitted = true;
  if(this.passForm.invalid){
    return;
  }
  for (let i = 0; i < this.users.length; i++)
  {
  if(!(this.passForm.controls.ps1.value ==this.users[i].pass)){
    
        alert("Password Reset Successfully!");
        this.submitted = false;
        this.passForm.controls.ps1.setValue("");
        this.passForm.controls.ps2.setValue("");
  }

  else{
    alert("your old password worng")
    this.invalidLogin = true;
  }
}
}


}