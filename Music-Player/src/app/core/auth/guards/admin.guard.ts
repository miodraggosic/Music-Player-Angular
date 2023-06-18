import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    return this.isAdmin();
  }
  canLoad(): boolean {
    return this.isAdmin();
  }

  private isAdmin(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    }
    this.router.navigateByUrl('home');
    return false;
  }
}
