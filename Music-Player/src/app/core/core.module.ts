import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const COMPONENTS = [
  HomeLayoutComponent,
  UserLayoutComponent,
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
})
export class CoreModule {}
