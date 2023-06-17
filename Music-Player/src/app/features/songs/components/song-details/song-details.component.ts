import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '@models/interfaces/song.interface';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  song$!: Observable<Song>;

  private songId!: number;

  constructor(
    private songsService: SongsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.songsService.initYtApi();
    this.song$ = this.getSong();
  }

  private getSong(): Observable<Song> {
    this.getRouteId();
    return this.songsService.getById(this.songId);
  }

  private getRouteId(): void {
    this.songId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
