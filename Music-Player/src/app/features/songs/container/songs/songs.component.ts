import { Component, Input, OnInit } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';
import { SongsService } from '../../services/songs.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  @Input() searchTerm: string = '';
  songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.getAllSongs();
  }

  onSearchTerm(event: string) {
    this.searchTerm = event;
    this.getFiltered();
  }

  private getAllSongs(): void {
    this.songsService
      .getAllSongs()
      .pipe(take(1))
      .subscribe((data) => (this.songs = data));
  }

  private getFiltered() {
    this.songsService
      .getFiltered(this.searchTerm)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);

        this.songs = data;
      });
  }
}
