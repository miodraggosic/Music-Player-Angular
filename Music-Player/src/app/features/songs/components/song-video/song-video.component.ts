import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-video',
  templateUrl: './song-video.component.html',
  styleUrls: ['./song-video.component.scss'],
})
export class SongVideoComponent implements OnInit {
  @Input() videoUrl!: string;

  songId!: string;

  playerVars = {
    origin: 'http://localhost:4200',
  };

  constructor() {}

  ngOnInit(): void {
    this.getSongId();
  }

  getSongId() {
    this.songId = this.videoUrl.split('v=')[1].split('&')[0];
  }
}
