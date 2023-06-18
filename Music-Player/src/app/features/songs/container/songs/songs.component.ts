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

  show: boolean = true;
  showButton: boolean = false;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.initYtApi();
    this.getAllSongs();
  }

  onSearchTerm(event: string) {
    this.searchTerm = event;
    this.getFiltered();
  }

  getAllSongs(): void {
    this.songsService
      .getAllSongs()
      .pipe(take(1))
      .subscribe((data) => ((this.songs = data), (this.showButton = false)));
  }

  private getFiltered() {
    this.songsService
      .getFiltered(this.searchTerm)
      .pipe(take(1))
      .subscribe((data) => {
        if (!!data.length) {
          console.log(data);
          this.songs = data;
          this.showButton = true;
          return;
        }
        this.showMessage();
      });
  }

  private showMessage(): void {
    this.show = !this.show;
    setTimeout(() => (this.show = !this.show), 3000);
  }
}
