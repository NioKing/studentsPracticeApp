import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from './models/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Users[] = []
  data : any[] = []
  isLoginFailed: boolean = false
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  
  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  

  ngOnInit(): void {
    this.getUsers()
  }

 // Get Login
  onSubmit() {
     this.authService.getUsers()
     .subscribe((res: any) => {
       const user = res.find((val: any) => {
         return val.email.toLocaleLowerCase() === this.loginForm.get('email')?.value.toLocaleLowerCase() && val.password === this.loginForm.get('password')?.value
       });
       if(user) {
         this.router.navigate(['students'])
         this.loginForm.reset()
         localStorage.setItem("LoggedIn", "true")
       }else {
         setTimeout(() => {
           this.isLoginFailed = false
         }, 4000);
         this.isLoginFailed = true
         localStorage.clear()
       }
     })
    }
  

  
  // Get Users
  getUsers() {
    this.authService.getUsers()
    .subscribe((res: any) => {
      this.users.push(res)
      console.log(this.users);
      
    })
  }


  // Get SignUp
  signUp() {
    this.router.navigate(['register'])
  }
}
