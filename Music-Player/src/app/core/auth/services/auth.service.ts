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
    console.log(user);
    return this.http.post<Login>(`${environment.baseApiUrl}login`, user).pipe(
      map((res: any) => {
        console.log(res);
        if (res) {
          this.authStorage.storeUser(res);
          console.log(this.isAdmin());

          this.router.navigateByUrl('');
          return true;
        }
        return false;
      })
    );
  }

  signUp(user: SignUp) {
    const createUser: User = this.authStorage.createUser(user);
    return this.http
      .post<User>(`${environment.baseApiUrl}users`, createUser)
      .pipe(
        tap((res: any) => {
          console.log(res);
          if (res) {
            this.router.navigateByUrl('user/login');
          }
        })
      );
  }

  logout(): void {
    this.authStorage.removeUser();
  }

  isAdmin(): boolean {
    const userRole = this.authStorage.getUserRole();
    console.log(userRole);

    return userRole === 'admin' ? true : false;
  }

  isAuthenticated(): boolean {
    return this.authStorage.getUserId() !== null;
  }

  getUserToken(): string {
    return this.authStorage.getUserToken();
  }
}
