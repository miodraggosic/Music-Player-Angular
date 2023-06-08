import { Component, OnInit } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';
import { SongsService } from '../../services/songs.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.getAllSongs();
  }

  private getAllSongs(): void {
    this.songsService
      .getAllSongs()
      .pipe(take(1))
      .subscribe((data) => (this.songs = data));
  }
}
