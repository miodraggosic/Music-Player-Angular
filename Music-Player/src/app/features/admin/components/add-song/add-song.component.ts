import { Component, OnInit } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';
import { take } from 'rxjs';
import { SongsService } from 'src/app/features/songs/services/songs.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent implements OnInit {
  constructor(private songsService: SongsService) {}

  ngOnInit(): void {}

  addSong(event: Song) {
    this.songsService
      .add(event)
      .pipe(take(1))
      .subscribe((data) => console.log(data));
  }
}
