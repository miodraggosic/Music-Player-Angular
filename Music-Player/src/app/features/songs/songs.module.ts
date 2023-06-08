import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';

import { SongsComponent } from './container/songs/songs.component';
import { SongComponent } from './components/song/song.component';
import { SongCardComponent } from './components/song-card/song-card.component';

const COMPONENTS = [SongsComponent, SongCardComponent, SongComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SongsRoutingModule],
  exports: [...COMPONENTS],
})
export class SongsModule {}
