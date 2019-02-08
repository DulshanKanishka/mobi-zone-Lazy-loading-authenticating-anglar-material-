import { AuthService } from './../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  get UserName() {
    return this.loginForm.get('userName');
  }
  get Password() {
    return this.loginForm.get('password');
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    if (this.UserName.value === 'dulshan' && this.Password.value === '1234') {
      console.log(this.UserName.value);
      alert(this.UserName.value);
      console.log(this.Password.value);
      alert(this.Password.value);
      this.authService.login(this.UserName.value, this.Password.value);

    } else {
      alert('Incorrect Your Username Or Password (username is=dulshan ,password is = 1234');
    }
  }

}
