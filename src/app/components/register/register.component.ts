import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder,FormControl,FormGroup,Validators,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private jwtHelper: JwtHelperService, public fb: FormBuilder, private loginSVC: LoginService) { }


  public registerForm = this.fb.group({
    user:['',[
      Validators.required,
      Validators.minLength(20)
    ]],
    password:['',[
      Validators.required,
      Validators.minLength(20)
    ]],
    name:['',[
      Validators.required,
      Validators.minLength(20)
    ]],
    lastname:['',[
      Validators.required,
      Validators.minLength(20)
    ]]
  });

  register()
  {
    this.loginSVC.register(this.registerForm.value).subscribe(
      res => {
        this.router.navigate(['/login']);
      }, 
      err => {
        
      });

  }

}
