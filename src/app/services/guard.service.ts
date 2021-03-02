import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('token') as string);
    // console.log(this.jwtHelper.getTokenExpirationDate());
    return !this.jwtHelper.isTokenExpired(token);
  }
}
