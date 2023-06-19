import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '@models/interfaces/song.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
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

  songId(id: number): void {
    this.songToDelete.emit(id);
  }
}
