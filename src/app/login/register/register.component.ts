import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isLoginFailed: boolean = false
  
  registerForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  ngOnInit(): void {
  }
  

  onRegister() {
    const user = {
      'email': this.registerForm.get('email')?.value,
      'password': this.registerForm.get('password')?.value
    }

    this.authService.getUsers()
    .subscribe((res: any) => {
      const existedUser = res.find((val: any) => val.email.toLocaleLowerCase() === user.email.toLocaleLowerCase())
      if(!existedUser) {
        this.authService.registerUser(user)
        .subscribe((response: any) => {
          console.log(response)
          this.registerForm.reset()
          localStorage.setItem("Registered", "true")
          this.router.navigate([''])
        })
      }else {
        setTimeout(() => {
          this.isLoginFailed = false
        }, 4000);
        this.isLoginFailed = true
        this.registerForm.reset()
      }
    })
  }

}
