import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, take } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();

  search: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    console.log('init');

    this.search.valueChanges
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((term) => {
        console.log('call'), this.searchTerm.emit(term);
      });
  }
}
