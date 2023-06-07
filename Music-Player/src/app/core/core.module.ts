import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  HeaderComponent,
  HomeLayoutComponent,
  UserLayoutComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
})
export class CoreModule {}
