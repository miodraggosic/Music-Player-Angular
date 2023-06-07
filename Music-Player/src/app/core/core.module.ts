import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const COMPONENTS = [
  HeaderComponent,
  HomeLayoutComponent,
  UserLayoutComponent,
  FooterComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class CoreModule {}
