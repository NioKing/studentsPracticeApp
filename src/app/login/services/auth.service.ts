import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

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

}
