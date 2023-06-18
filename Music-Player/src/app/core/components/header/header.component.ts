import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavLink } from '@models/interfaces/nav-link.interface';
import { take } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'mikimusic';
  navLinks!: NavLink[];

  admin: boolean = false;
  logged: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getNavLinks();
  }

  logout() {
    this.auth.logout();
    this.isLogged();
  }

  private isAdmin(): void {
    this.admin = this.auth.isAdmin();
  }
  private isLogged() {
    this.isAdmin();
    this.logged = !this.auth.isAuthenticated();
  }

  private getNavLinks(): void {
    this.navigationService
      .getNavLinks()
      .pipe(take(1))
      .subscribe((data: NavLink[]) => {
        this.navLinks = data;
        this.isLogged();
      });
  }
}
