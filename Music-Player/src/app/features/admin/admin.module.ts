import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { AddSongComponent } from './components/add-song/add-song.component';
import { TableComponent } from './components/table/table.component';
import { AdminSongsComponent } from './container/admin-songs/admin-songs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SongFormComponent } from './components/song-form/song-form.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';

const COMPONENTS = [
  AdminSongsComponent,
  TableComponent,
  AddSongComponent,
  SongFormComponent,
  EditSongComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [...COMPONENTS],
})
export class AdminModule {}
