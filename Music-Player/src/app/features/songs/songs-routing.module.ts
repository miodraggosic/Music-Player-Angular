import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './container/songs/songs.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full',
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'songs/:id',
    component: SongDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
