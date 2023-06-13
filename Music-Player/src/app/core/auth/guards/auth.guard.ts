import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    return this.isAuthentificated();
  }
  canLoad(): boolean {
    return this.isAuthentificated();
  }

  private isAuthentificated(): boolean {
    if (!this.authService.isAuthenticated()) {
      console.log('auth', this.authService.isAuthenticated());
      return false;
    }
    return true;
  }
}
