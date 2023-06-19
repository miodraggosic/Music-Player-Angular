import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { Login, SignUp, User } from '@models/interfaces/user.interface';
import { Observable, map, tap } from 'rxjs';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authStorage: AuthStorageService
  ) {}

  login(user: Login): Observable<boolean> {
    return this.http.post<Login>(`${environment.baseApiUrl}login`, user).pipe(
      map((res: any) => {
        if (res) {
          this.authStorage.storeUser(res);
          this.router.navigateByUrl('home/admin');
        }
        return res;
      })
    );
  }

  signUp(user: SignUp) {
    const createUser: User = this.authStorage.createUser(user);
    return this.http
      .post<User>(`${environment.baseApiUrl}users`, createUser)
      .pipe(
        tap((res: any) => {
          if (res) {
            this.router.navigateByUrl('user/login');
          }
        })
      );
  }

  logout(): void {
    this.authStorage.removeUser();
    this.router.navigateByUrl('home');
  }

  isAdmin(): boolean {
    const userRole = this.authStorage.getUserRole();
    return userRole === 'admin' || userRole === 'moderator' ? true : false;
  }

  isAuthenticated(): boolean {
    return this.authStorage.getUserRole() !== null;
  }

  getUserToken(): string {
    return this.authStorage.getUserToken();
  }
}
