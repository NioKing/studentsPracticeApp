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
    
    this.authService.registerUser(user)
    .subscribe((res: any) => {
      console.log(res);
    })
    this.registerForm.reset()
    this.router.navigate([''])
  }

}
