import { RegisterService } from './../register.service';
import { AdminloginService } from './../adminlogin.service';
import { UserloginService } from './../userlogin.service';
import { Router } from '@angular/router';
import { AdminLogin } from './AdminLogin';
import { UserLogin } from './UserLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Register } from '../register/Register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  activeTab = 'search';

  search(activeTab) {
    this.activeTab = activeTab;
  }

  result(activeTab) {
    this.activeTab = activeTab;
  }

  userLoginForm: FormGroup;
  adminLoginForm: FormGroup;
  users: UserLogin[];
  admins: AdminLogin[];
  submitted: boolean = false;
  invalidLogin: boolean = false;
  registers:Register[];
  status=1;
  status1=1;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserloginService, private adminService: AdminloginService, private regService:RegisterService) {
    this.users = new Array();
    this.admins = new Array();
  }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      emailId: ['', Validators.required],
      pass: ['', Validators.required],
    });
    this.adminLoginForm = this.fb.group({
      AemailId: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });

      this.adminService.getAdmins()
      .subscribe(data => {
        this.admins = data;
      });

      this.regService.getRegistration().subscribe(data => {
        this.registers = data;
      });
  }
  uName:string;
  userLogin() {
    this.submitted = true;
    if (this.userLoginForm.invalid) {
      return;
    }
    for (let i = 0; i < this.users.length; i++) {
     /* this.email = this.userLoginForm.controls.emailId.value;
      this.pass = this.userLoginForm.controls.password.value;
      this.em = this.users[i].emailId;
      this.ps = this.users[i].password;
*/
      /*alert(this.users[i].emailId+':'+this.users[i].pass);
      alert(this.userLoginForm.controls.emailId.value+':'+this.userLoginForm.controls.pass.value)
*/
      if (this.userLoginForm.controls.emailId.value == this.users[i].emailId &&
        this.userLoginForm.controls.pass.value == this.users[i].pass) {
          this.status=0;
        localStorage.setItem("username", this.userLoginForm.controls.emailId.value);
        this.router.navigate(['dashboard']);
        for(let u1 of this.registers){
          if(this.userLoginForm.controls.emailId.value== u1.emailId){
            this.uName=u1.firstName+' '+ u1.lastName;
            
            localStorage.setItem("uname",this.uName);
            

          }
        }
      }
      else {
        
        this.invalidLogin = true;
      }

    }
    if(this.status==1)
    {
      alert("INVALID LOGIN")
    }


  }
  adminLogin() { 
    this.submitted = true;
    if (this.adminLoginForm.invalid) {
      return;
    }
    for (let i = 0; i < this.admins.length; i++) {
     /* this.email = this.userLoginForm.controls.emailId.value;
      this.pass = this.userLoginForm.controls.password.value;
      this.em = this.users[i].emailId;
      this.ps = this.users[i].password;
*/
      /*alert(this.users[i].emailId+':'+this.users[i].pass);
      alert(this.userLoginForm.controls.emailId.value+':'+this.userLoginForm.controls.pass.value)
*/
      if (this.adminLoginForm.controls.AemailId.value == this.admins[i].emailId &&
        this.adminLoginForm.controls.password.value == this.admins[i].password) {
        localStorage.setItem("adminname", this.adminLoginForm.controls.AemailId.value);
        this.router.navigate(['admin-page']);
        this.status1=0;
      }
      else {
        this.invalidLogin = true;
      }
      
    }

    if(this.status1==1)
    {
      alert("INVALID LOGIN")
    }


  }
}