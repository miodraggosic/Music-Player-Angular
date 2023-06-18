import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    return this.isAuthentificated();
  }
  canLoad(): boolean {
    return this.isAuthentificated();
  }

  private isAuthentificated(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('home');
      return false;
    }
    return true;
  }
}
