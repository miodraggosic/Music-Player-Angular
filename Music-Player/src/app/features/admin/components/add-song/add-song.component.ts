import { Component } from '@angular/core';
import { Titles } from '@models/enums/titles.enum';
import { Song } from '@models/interfaces/song.interface';
import { take } from 'rxjs';
import { SongsService } from 'src/app/features/songs/services/songs.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent {
  titleText: string = Titles.NEWSONG;
  constructor(private songsService: SongsService) {}

  addSong(event: Song) {
    this.songsService.add(event).pipe(take(1)).subscribe();
  }
}
