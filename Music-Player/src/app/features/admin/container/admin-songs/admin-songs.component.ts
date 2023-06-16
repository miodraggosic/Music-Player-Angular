import { Component, OnInit } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';
import { take } from 'rxjs';
import { SongsService } from 'src/app/features/songs/services/songs.service';

@Component({
  selector: 'app-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.scss'],
})
export class AdminSongsComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.getSongs();
  }

  deleteSong(event: number) {
    console.log(event);
    this.songsService.delete(event).subscribe((data) => {
      console.log(data);
      this.getSongs();
    });
  }

  private getSongs(): void {
    this.songsService
      .getAllSongs()
      .pipe(take(1))
      .subscribe((data: Song[]) => (this.songs = data));
  }
}
