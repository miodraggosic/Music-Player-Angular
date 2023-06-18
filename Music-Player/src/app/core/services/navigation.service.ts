import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { NavLink } from '@models/interfaces/nav-link.interface';
import { Observable, map, retry, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly navLinksUrl: string = `${environment.baseApiUrl}navLinks`;

  private navLinks$!: Observable<NavLink[]>;

  constructor(private http: HttpClient) {}

  getNavLinks(): Observable<NavLink[]> {
    if (!this.navLinks$) {
      this.navLinks$ = this.http
        .get<NavLink[]>(this.navLinksUrl)
        .pipe(retry(2), shareReplay());
    }
    return this.navLinks$.pipe(map((links) => links));
  }
}
