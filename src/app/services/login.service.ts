import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = '';

  constructor(private http: HttpClient) { }

}
