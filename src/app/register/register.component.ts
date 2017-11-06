import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:Array<User>;


  constructor(
    private userSer:UserServiceService,
    private router:Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onRegister(myForm:NgForm){
    console.log(myForm.value);
    let user:User=new User();
    user.role=myForm.value.role;
    user.first_name=myForm.value.first_name;
    user.last_name=myForm.value.last_name;
    user.user_name=myForm.value.user_name;
    user.email=myForm.value.email;
    user.password=myForm.value.password;
    user.password_confirmation=myForm.value.password_confirmation;

    this.userSer.saveUser(user)
    .subscribe(respNewUser =>{
      this.alertService.success('Registration successful', true);
      this.router.navigate(['/login'])
      // this.users.push(respNewUser);
    },
  error=>{
    this.alertService.error(error);
  });


  }

}
