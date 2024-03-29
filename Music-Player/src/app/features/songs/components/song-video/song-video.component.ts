import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-video',
  templateUrl: './song-video.component.html',
  styleUrls: ['./song-video.component.scss'],
})
export class SongVideoComponent implements OnInit {
  @Input() videoUrl!: string;
  @Input() videoSizeBig?: boolean;

  songId!: string;

  height!: number;
  width!: number;

  playerVars = {
    origin: 'http://localhost:4200',
  };

  constructor() {}

  ngOnInit(): void {
    this.getSongId();
    this.setPlayerSize();
  }

  private getSongId(): void {
    this.songId = this.videoUrl.split('v=')[1].split('&')[0];
  }

  private setPlayerSize() {
    this.videoSizeBig
      ? ((this.height = 540), (this.width = 960))
      : ((this.height = 250), (this.width = 460));
  }
}
