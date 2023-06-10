import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SongsRoutingModule } from './songs-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SongsComponent } from './container/songs/songs.component';
import { SongComponent } from './components/song/song.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

const COMPONENTS = [
  SongsComponent,
  SongCardComponent,
  SongComponent,
  SongDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [...COMPONENTS],
})
export class SongsModule {}
