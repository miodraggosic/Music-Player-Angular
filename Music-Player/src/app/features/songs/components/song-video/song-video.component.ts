import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-video',
  templateUrl: './song-video.component.html',
  styleUrls: ['./song-video.component.scss'],
})
export class SongVideoComponent implements OnInit {
  @Input() videoUrl!: string;

  songId!: string;

  constructor() {}

  ngOnInit(): void {
    this.getSongId();
  }

  getSongId() {
    console.log(this.videoUrl);
    this.songId = this.videoUrl.split('v=')[1].split('&')[0];
  }
}
