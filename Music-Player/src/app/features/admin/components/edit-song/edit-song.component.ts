import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Titles } from '@models/enums/titles.enum';
import { Song } from '@models/interfaces/song.interface';
import { Observable, take } from 'rxjs';
import { SongsService } from 'src/app/features/songs/services/songs.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss'],
})
export class EditSongComponent implements OnInit {
  titleText: string = Titles.EDITSONG;
  songToUpdate$!: Observable<Song>;
  song!: Song;
  songId!: number;

  constructor(
    private songsService: SongsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSong();
  }

  getSong() {
    this.getRouteId();
    this.songToUpdate$ = this.songsService.getById(this.songId);
  }

  updateSong(event: Song) {
    this.songsService
      .update(this.songId, event)
      .pipe(take(1))
      .subscribe((data) => console.log(data));
  }

  private getRouteId(): void {
    this.songId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
