import { Component, Input, OnInit } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() song!: Song | null;

  constructor() {}

  ngOnInit(): void {}
}
