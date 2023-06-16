import { take, Observable, tap } from 'rxjs';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '@models/interfaces/song.interface';
import { SongsService } from 'src/app/features/songs/services/songs.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss'],
})
export class EditSongComponent implements OnInit {
  songToUpdate!: Observable<Song>;

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
    this.songToUpdate = this.songsService.getById(this.songId);
  }
  updateSong(event: Song) {
    console.log(event);

    this.songsService
      .update(this.songId, event)
      .pipe(take(1))
      .subscribe((data) => console.log(data));
  }

  private getRouteId(): void {
    this.songId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
