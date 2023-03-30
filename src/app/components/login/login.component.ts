import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,  public fb: FormBuilder, private loginSVC: LoginService) { }

  public loginForm = this.fb.group({
    user:[''],
    password:['']
  });

  login()
  {
    this.loginSVC.login(this.loginForm.value.user!, this.loginForm.value.password!).subscribe(
      res => {
        this.router.navigate(['main']);
      }, 
      err => {

      });

  }

}
