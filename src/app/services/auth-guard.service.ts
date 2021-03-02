import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public guard: GuardService, public router: Router) { }

  canActivate(): boolean {
    if (!this.guard.isAuthenticated()) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
