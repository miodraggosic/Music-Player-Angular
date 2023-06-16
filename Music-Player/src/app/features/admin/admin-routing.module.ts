import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSongsComponent } from './container/admin-songs/admin-songs.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSongsComponent,
  },
  {
    path: 'addSong',
    component: AddSongComponent,
  },
  {
    path: 'editSong/:id',
    component: EditSongComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
