import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  // Get All Users List
  getUsers() {
    return this.http.get('http://localhost:3000/users')
    .pipe(share())
  }

  // Login User
  loginUser(user: Users) {
    return this.http.post('http://localhost:3000/users', user)
  }
}
