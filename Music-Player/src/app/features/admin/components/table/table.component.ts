import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() songs: Song[] = [];
  @Output() songToDelete = new EventEmitter<number>();
  displayedColumns = [
    'row',
    'name',
    'author',
    'videoUrl',
    'datePublished',
    'duration',
    'edit',
    'delete',
  ];

  constructor() {}

  ngOnInit(): void {}

  songId(id: number): void {
    this.songToDelete.emit(id);
  }
}
