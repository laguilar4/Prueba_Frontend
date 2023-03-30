import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user, sigin } from '../interfaces/login';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  isAuth():boolean{
    const token = localStorage.getItem('user_token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('user_token')){
      return false;
    }
    return true;
  }

  login(user: string, password:string)
  {
    const body = {
      user: user,
      password: password
    }
    return this.http.post(`${this.URL_API}login`, body).pipe(
      map((resp: any) => 
      {
        localStorage.setItem('user_token',resp['token']);
        return resp['token'];
      }
      ));
  }

  register(user: user)
  {
    return this.http.post(`${this.URL_API}/register`, user);
  }

}
