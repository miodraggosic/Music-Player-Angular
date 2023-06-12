import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { UserLayoutComponent } from './core/layouts/user-layout/user-layout.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { SignupComponent } from './core/auth/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/songs/songs.module').then((m) => m.SongsModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./features/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
