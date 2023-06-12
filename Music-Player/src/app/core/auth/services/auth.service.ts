import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { Login, SignUp, User } from '@models/interfaces/user.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: Login): Observable<boolean> {
    console.log(user);
    return this.http.post<Login>(`${environment.baseApiUrl}login`, user).pipe(
      map((res: any) => {
        console.log(res);
        if (res) {
          this.router.navigateByUrl('');
          return true;
        }
        return false;
      })
    );
  }

  signUp(user: SignUp) {
    return this.http.post<User>(`${environment.baseApiUrl}users`, user).pipe(
      map((res: any) => {
        console.log(res);
        if (res) {
          this.router.navigateByUrl('user/login');
        }
      })
    );
  }
}
