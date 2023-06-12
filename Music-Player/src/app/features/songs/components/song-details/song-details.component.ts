import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '@models/interfaces/song.interface';

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
