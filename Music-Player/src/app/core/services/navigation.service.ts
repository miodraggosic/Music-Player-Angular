import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { NavLink } from '@models/interfaces/nav-link.interface';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly navLinksUrl: string = `${environment.baseApiUrl}navLinks`;

  constructor(private http: HttpClient) {}

  getNavLinks(): Observable<NavLink[]> {
    return this.http.get<NavLink[]>(this.navLinksUrl).pipe(retry(2));
  }
}
