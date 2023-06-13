import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

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
    this.updateSearch();
  }

  private updateSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(2000),
        map((value: string) => value.trim()),
        distinctUntilChanged()
      )
      .subscribe((term) => {
        console.log(term);
        if (term) {
          this.searchTerm.emit(term);
        }
      });
  }
}
