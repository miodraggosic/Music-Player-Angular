import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavLink } from '@models/interfaces/nav-link.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks: NavLink[] = [];
  title: string = 'mikimusic';

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.getNavLinks();
  }

  private getNavLinks(): void {
    this.navigationService
      .getNavLinks()
      .pipe(take(1))
      .subscribe((data: NavLink[]) => (this.navLinks = data));
  }
}
