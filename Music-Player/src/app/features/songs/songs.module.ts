import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SongsRoutingModule } from './songs-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { SongsComponent } from './container/songs/songs.component';
import { SongComponent } from './components/song/song.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { SongVideoComponent } from './components/song-video/song-video.component';

const COMPONENTS = [
  SongsComponent,
  SongCardComponent,
  SongComponent,
  SongDetailsComponent,
  SongVideoComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    YouTubePlayerModule,
  ],
  exports: [...COMPONENTS],
})
export class SongsModule {}
