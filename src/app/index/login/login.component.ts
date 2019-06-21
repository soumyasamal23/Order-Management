import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  OBSLoginForm: FormGroup;
  constructor(private fb: FormBuilder,private authService: AuthService, private routerNavigate:Router) {}

  LoginAction(formData: any) {
    if (this.authService.loginAction(formData)) {
     this.routerNavigate.navigate(['dashboard']);
   }
  //  if(rememberMe){
  //   localStorage.setItem('Name', credentials.firstName);
  //   localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
  // }
  }

  ngOnInit() {
    this.OBSLoginForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

 }
