import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  get isLoggedIn() {

    if (sessionStorage.getItem('token')) {
      return true;
    }

    return false;

  }

  constructor(private router: Router) { }

  login(userName: string, password: string) {
    sessionStorage.setItem('token', 'token');
    this.router.navigate(['/home']);
  }


  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
